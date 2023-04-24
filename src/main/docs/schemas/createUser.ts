export const createUserParamsSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            example: 'John Doe',
            required: true,
        },
        email: {
            type: 'string',
            example: 'any_email@mail.com',
            required: true,
        },
        password: {
            type: 'string',
            example: '12345',
            required: true,
        },
        document: {
            type: 'string',
            example: '111.111.111-11',
            required: true,
        },
        picture: {
            type: 'string',
            example: 'picture.jpeg',
            required: true,
        },
        phone: {
            type: 'string',
            example: '99999-9999',
            required: true,
        },
        job: {
            type: 'string',
            example: 'Manager',
            required: true,
        },
        can_approve: {
            type: 'boolean',
            example: true,
            required: true,
        },
    },
};

export const createUserResponseSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
        },
        email: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
        document: {
            type: 'string',
        },
        picture: {
            type: 'string',
        },
        phone: {
            type: 'string',
        },
        job: {
            type: 'string',
        },
        can_approve: {
            type: 'boolean',
        },
        auth: {
            type: 'boolean',
        },
        id: {
            type: 'integer',
        },
        created_at: {
            type: 'string',
        },
        updated_at: {
            type: 'string',
        },
    },
};
