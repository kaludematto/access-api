export const databaseConfig = Object.freeze({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as string,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
});
