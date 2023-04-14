import { HttpResponse } from '../protocols/http';
import { ServerError } from './serverError';

export const badRequest = (error: Error): HttpResponse => ({
    statusCode: 400,
    body: error,
});

export const serverError = (error: Error): HttpResponse => ({
    statusCode: 500,
    body: new ServerError(String(error.stack)),
});

export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    body: data,
});

export const createdOk = (data: any): HttpResponse => ({
    statusCode: 201,
    body: data,
});

export const unauthorized = (error: Error): HttpResponse => ({
    statusCode: 401,
    body: error,
});

export const noContent = (body?: any): HttpResponse => ({
    statusCode: 204,
    body,
});

export const forbidden = (error: Error): HttpResponse => ({
    statusCode: 403,
    body: error,
});
