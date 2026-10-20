const { app } = await import('./app.js');

//n sabia como pegar as variaveis de .env ent pesquisei e achei o comando
process.loadEnvFile('.env');

const porta = process.env.PORT || 3000;

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
