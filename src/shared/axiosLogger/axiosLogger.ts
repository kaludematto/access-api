import { AxiosResponse } from 'axios';
import { logger } from '../logger/logger';

export const axiosLogger = async (
    axiosRequest: Promise<AxiosResponse>,
): Promise<AxiosResponse<any, any> | null> => {
    let response = null;

    await axiosRequest
        .then(resp => {
            response = resp;

            if (resp) {
                const responseDescription = response
                    ? getResponseDescription(resp)
                    : '';
                logger.info(`AXIOS SUCCESS - ${responseDescription}`);
            }
        })
        .catch(err => {
            const errResponse = err.response;

            let logErrorMsg = err;

            if (errResponse) {
                const responseDescription = err
                    ? getResponseDescription(errResponse)
                    : '';
                logErrorMsg = `AXIOS ERROR - ${responseDescription}`;
            }

            logger.error(logErrorMsg);
        });

    return response;
};

const getResponseDescription = (response: AxiosResponse): string => {
    const { status, config } = response;
    const { baseURL, url, method } = config;

    return `${method?.toUpperCase() ?? ''} - ${baseURL ?? ''}${url ?? ''} - ${
        status ?? ''
    }`;
};
