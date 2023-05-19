import paths from './paths';
import schemas from './schemas';
import components from './components';

export default {
    openapi: '3.0.1',

    info: {
        title: 'Access Control - Access Control BFF API',
        description: 'Access Control Back-end - ROL',
        version: '1.0.0',
    },
    servers: [
        {
            url: '/access-api',
            description: 'Servidor Principal',
        },
    ],
    tags: [
        {
            name: 'Users',
            description: 'Rotas relacionadas a exames de pacientes',
        },
        {
            name: 'Employes',
            description: 'Rotas relacionadas a exames de pacientes - v2',
        },
        {
            name: 'Company',
            description: 'Rotas relacionadas ao login dos pacientes',
        },
        {
            name: 'Visitors',
            description: 'Rotas para verificação se a aplicação esta rodando',
        },
    ],
    paths,
    schemas,
    components,
};

export const options = {
    customSiteTitle: `Access-API - Docs`,
    showExplorer: true,
};
