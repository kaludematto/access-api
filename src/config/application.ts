export const applicationConfig = Object.freeze({
    port: process.env.PORT as string,
    env: process.env.ENV as string,
    appPrefix: 'accesss-api',
    name: 'access',
    version: '1.0.0',
});
