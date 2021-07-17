import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') {
        const TOKEN = '872c7414dd15a97c417a1acf32af2e';
        const client = new SiteClient(TOKEN);

        // Validar os dados, antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "972654",
            ...request.body,
        })

        response.json({
            registroCriado,
        })
        return;
    }

    response.status(404).json({
        data: 'alguma coisa',
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}
