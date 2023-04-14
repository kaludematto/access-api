import { logger } from '@/shared/logger/logger';
import axios from 'axios';

const httpService = axios.create();

async function httpPost<T>({ url, data, options, origin }: THttpInput) {
    try {
        return await httpService.post<T>(url, data, options);
    } catch (error) {
        logger.error(error);
    }
}

async function httpGet<T>({ url, options, origin }: THttpInput) {
    try {
        return await httpService.get<T>(url, options);
    } catch (error) {
        logger.error(error);
    }
}

type THttpInput = {
    url: string;
    options?: object;
    data?: any;
    origin?: string;
};

export { httpPost, httpGet };
