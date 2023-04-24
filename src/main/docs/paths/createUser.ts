export const createUser = {
    post: {
        tags: ['Users'],
        summary: 'Create a new User on Database',
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/createUserParamsSchema',
                    },
                },
            },
        },

        responses: {
            200: {
                description: 'Sucesso',
                content: {
                    'application/json': {
                        schema: {
                            items: {
                                $ref: '#/schemas/createUserResponseSchema',
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
