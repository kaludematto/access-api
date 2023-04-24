export const getUserResponse = {
    type: 'object',
    properties: {
        id: { type: 'integer', example: 1 },
        name: { type: 'string', example: 'John Doe' },
        email: { type: 'string', example: 'any_email@mail' },
        password: {
            type: 'string',
            example: '11c7e510fa55264d039a48c8d0bf724b',
        },
        document: { type: 'string', example: '111.111.111-11' },
        picture: { type: 'string', example: 'picture.jpeg' },
        phone: { type: 'integer', example: '99999-9999' },
        job: { type: 'string', example: 'manager' },
        can_approve: { type: 'boolean', example: true },
        auth: { type: 'boolean', example: true },
        created_at: { type: 'string' },
        updated_at: { type: 'string' },
    },
};
