
import express from 'express';

export const app = express();

// Permite receber requisições com JSON
app.use(express.json());

// Rota para testar se o servidor está funcionando
app.get('/api/check', (req, res) => {
    res.status(200).json({
        status: 'ok',
        mensagem: 'Servidor funcionando via HTTP!'
    });
});


// --------------------ROTAS DA API--------------------
//Como eu não sabia como manipular as arrays aqui pelas rotas que criei, tive que pedir ajuda pra uma ia apenas para me mostrar os códigos que devo utilizar

let produtos = [
    {
        id: 1,
        nome: 'Army Bomb',
        categoria: 'Lightstick',
        descricao: 'Lightstick do BTS',
        preco: 350,
        quantidade: 5
    },
    {
        id: 2,
        nome: 'Álbum BTS',
        categoria: 'Álbum',
        descricao: 'Álbum de música do BTS',
        preco: 120,
        quantidade: 10
    }
];

// ROTA READ - LISTAR TODOS OS PRODUTOS
//aqui so retornei a array msm KKKKK
app.get('/api/produtos', (req, res) => {
    res.status(200).json(produtos);
});

//ROTA READ POR ID - LISTAR PRODUTO ESPECÍFICO
//aqui eu peguei o id que foi passado e usei um .find pra achar ele na array e retornei so ele
app.get('/api/produtos/:id', (req, res) => {
    const id = Number(req.params.id);

    const produto = produtos.find((p) => p.id === id);

    if (!produto) {
        return res.status(404).json({
            erro: 'Produto não encontrado'
        });
    }

    res.status(200).json(produto);
});

//ROTA CREATE - ADICIONAR NOVO PRODUTO
//aqui eu coloquei todos os campos dentro de um body e fiz a validação de cada um deles e se algum der BO responde com 400
//agora se passar agnt cria uma variavel novoProduto que vai receber cada campo, verifico tbm o id dele pra ver se é maior q zero
//e dps eu pego o maior id que tenho la na array salva acima e adiciono +1, esse .push (que eu pesquisei, opsie!) add na array
//lá em cima e respondo com 201 e essa nova array já

app.post('/api/produtos', (req, res) => {
    const { nome, categoria, descricao, preco, quantidade } = req.body;

    if (
        typeof nome !== 'string' || !nome.trim() ||
        typeof categoria !== 'string' || !categoria.trim() ||
        typeof descricao !== 'string' || !descricao.trim() ||
        !Number.isFinite(preco) || preco < 0 ||
        !Number.isInteger(quantidade) || quantidade < 0
    ) {
        return res.status(400).json({
            erro: 'Dados do produto inválidos'
        });
    }

    const novoProduto = {
        id: produtos.length > 0
            ? Math.max(...produtos.map((p) => p.id)) + 1
            : 1,
        nome: nome.trim(),
        categoria: categoria.trim(),
        descricao: descricao.trim(),
        preco,
        quantidade
    };

    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
});

//ROTA UPDATE - ATUALIZAR PRODUTO EXISTENTE
//fiz basicamente um copia e cola do criar, a unica diferença foi que eu nao consegui atualizar exatamente o indice da array
//que ja existia, ent eu tive que fazer uma variavel do indice pq seria lá que o meu produto vai ser atualizado né
//(ai eu realmente tive que usar ia pra poder conseguir fazer essa parte pq eu nao sabia que exitia o comando findIndex :P, pfv nao me mata paiva)
//enfim botei tudo num body, fiz verificação de tudo, se deu bo responde com 400, se não add no produto e no indice as novas infos
//e so retorna o objeto atualizado
app.put('/api/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const indice = produtos.findIndex((p) => p.id === id);

    const { nome, categoria, descricao, preco, quantidade } = req.body;

    if (
        typeof nome !== 'string' || !nome.trim() ||
        typeof categoria !== 'string' || !categoria.trim() ||
        typeof descricao !== 'string' || !descricao.trim() ||
        !Number.isFinite(preco) || preco < 0 ||
        !Number.isInteger(quantidade) || quantidade < 0
    ) {
        return res.status(400).json({
            erro: 'Dados do produto inválidos'
        });
    }

    produtos[indice] = {
        id,
        nome: nome.trim(),
        categoria: categoria.trim(),
        descricao: descricao.trim(),
        preco,
        quantidade
    };

    res.status(200).json(produtos[indice]);
});

//ROTA DELETE - DELETAR PRODUTO EXISTENTE
//resumindo ele pega o id que foi mandado no link e dps verifica se existe na array msm algo com o msmid, se nao tiver ja
//responde com erro e fecha, se nao ele usa um .filter que cria uma nova array com tudo menos o objeto com o msm id que foi passado
//dps retorna so uma mensagem de sucesso
//aqui tive que usar a ia tbm no .some e no .filter pq o some eu nao sabia como usar pq pesquisei no site e nao sabia a sintaxe certa
//e o filter pq eu nao sabia como real fazer pra deletar LKLLLLKKKK ai eu pesquisei e vi que real a maneira mais facil era reescrever
//a array toda deixando so de fora o id passado
app.delete('/api/produtos/:id', (req, res) => {
    const id = Number(req.params.id);

    const produtoExiste = produtos.some((p) => p.id === id);
    //.some significa que ele percorre a array e retorna oq for verdadeiro e compara o id da array com o dado ali em cima

    if (!produtoExiste) {
        return res.status(404).json({
            erro: 'Produto não encontrado'
        });
    }

    produtos = produtos.filter((p) => p.id !== id);
    //aqui que deleta o bagulho msm pq ele percorre a array e vai criar OOUUTRO array com os objetos que atendao a condição
    //a condição aqui seria tudo menos oq é diferente do id dado la em cima e o produto = significa que bota tudo dentro dele mesmo (la ele)

    res.status(200).json({
        mensagem: 'Produto excluído com sucesso'
    });
});

// --------------------ROTAS DE ERROS--------------------
// Resposta para rotas que não existem
app.use((req, res) => {
    res.status(404).json({
        erro: `A rota ${req.method} ${req.originalUrl} não existe`
    });
});

//erro seria o middleware
app.use((erro, req, res, _next) => {
  console.error('Erro de Sistema: ', erro.message);
  res.status(500).json({ erro: 'Falha interna do servidor' });
});
