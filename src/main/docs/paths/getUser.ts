export const getUser = {
    get: {
        tags: ['Users'],
        summary: 'Get an User Profile info',
        parameters: [
            {
                in: 'query',
                description: 'User Email',
                name: 'email',
                required: true,
            },
        ],

        responses: {
            200: {
                description: 'Sucesso',
                content: {
                    'application/json': {
                        schema: {
                            items: {
                                $ref: '#/schemas/getUserResponse',
                            },
                        },
                    },
                },
            },
            400: {
                $ref: '#/components/badRequest',
            },
            401: {
                $ref: '#/components/unauthorized',
            },
            403: {
                $ref: '#/components/forbidden',
            },
            404: {
                $ref: '#/components/notFound',
            },
            500: {
                $ref: '#/components/serverError',
            },
        },
    },
};
