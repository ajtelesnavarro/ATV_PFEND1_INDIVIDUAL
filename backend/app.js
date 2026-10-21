
import express from 'express';
import cors from 'cors';

export const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Array de produtos em memória

let produtos = [
    // LIGHTSTICKS
    {
        id: 1,
        nome: 'Army Bomb Ver. 4',
        categoria: 'Lightstick',
        descricao: 'Lightstick oficial BTS versão 4',
        preco: 350,
        quantidade: 5,
        imagem: 'https://shop.delivered.co.kr/cdn/shop/files/b7c6a0dca150ebbb90e63f35b90fc915_20260206_040439_688.png'
    },
    {
        id: 2,
        nome: 'Army Bomb Keyring Ver. 4',
        categoria: 'Lightstick',
        descricao: 'Lightstick em versão chaveiro',
        preco: 420,
        quantidade: 3,
        imagem: 'https://shop.delivered.co.kr/cdn/shop/files/18b7e9b6483fc7b68c08366937de72aa.png'
    },
    {
        id: 3,
        nome: 'Cradle Army Bomb Ver. 4',
        categoria: 'Lightstick',
        descricao: 'Apoio para a Lightstick oficial.',
        preco: 90,
        quantidade: 8,
        imagem: 'https://shop.delivered.co.kr/cdn/shop/files/ceb8e108eb0ee2002b75852ffdbc8d40.png'
    },

    // ÁLBUNS
    {
        id: 4,
        nome: 'Map of the Soul: 7',
        categoria: 'Álbum',
        descricao: 'Álbum de estúdio do BTS',
        preco: 150,
        quantidade: 10,
        imagem: 'https://shop.delivered.co.kr/cdn/shop/files/XL_a053623c-2b88-4106-84a8-d747fde02482.jpg'
    },
    {
        id: 5,
        nome: 'PERMISSION TO DANCE - LIVE1',
        categoria: 'Álbum',
        descricao: 'Apresentação ao vivo',
        preco: 180,
        quantidade: 6,
        imagem: 'https://shop.delivered.co.kr/cdn/shop/files/XL_b76f77db-7bb1-4231-a04b-827912b24fab.jpg'
    },
    {
        id: 6,
        nome: 'Proof',
        categoria: 'Álbum',
        descricao: 'Álbum antológico do BTS',
        preco: 160,
        quantidade: 7,
        imagem: 'https://shop.delivered.co.kr/cdn/shop/files/XL_b76f77db-7bb1-4231-a04b-827912b24fab.jpg'
    },

    // PELÚCIAS
    {
        id: 7,
        nome: 'BAKERY SHOP BT21 PLUSH',
        categoria: 'Pelúcia',
        descricao: 'Pelúcia do BT21 versão padaria.',
        preco: 80,
        quantidade: 12,
        imagem: 'https://shop.delivered.co.kr/cdn/shop/files/a7626953eab84504bf2b935113b92f30.png'
    },
    {
        id: 8,
        nome: 'ANGEL & VILLAIN BT21 PLUSH',
        categoria: 'Pelúcia',
        descricao: 'Pelúcia do BT21 versão anjo/demonio.',
        preco: 85,
        quantidade: 10,
        imagem: 'https://shop.delivered.co.kr/cdn/shop/files/f45ba486dd6a181bc17c22b7efc69713.jpg'
    },
    {
        id: 9,
        nome: 'ORANGE PARTY BT21 PLUSH',
        categoria: 'Pelúcia',
        descricao: 'Pelúcia do BT21 versão tangerina.',
        preco: 95,
        quantidade: 8,
        imagem: 'https://shop.delivered.co.kr/cdn/shop/files/34cc2efa05f29376f88b8b8455a85e16.png'
    },

    // PHOTOCARDS INDIVIDUAIS + OT7
    {
        id: 10,
        nome: 'Photocard RM',
        categoria: 'Photocard',
        descricao: 'Photocard colecionável do RM',
        preco: 20,
        quantidade: 15,
        imagem: 'https://biasroomcdn.com/no-watermarked/J%20workspace/uploads/hdz92yhasaai8zv_1_mmy8dbqz_wfm8k8.jpeg'
    },
    {
        id: 11,
        nome: 'Photocard Jin',
        categoria: 'Photocard',
        descricao: 'Photocard colecionável do Jin',
        preco: 20,
        quantidade: 15,
        imagem: 'https://biasroomcdn.com/no-watermarked/J%20workspace/uploads/hdz92z5boaae1xc_1_mmy8dow0_u5rkit.jpeg'
    },
    {
        id: 12,
        nome: 'Photocard SUGA',
        categoria: 'Photocard',
        descricao: 'Photocard colecionável do SUGA',
        preco: 20,
        quantidade: 15,
        imagem: 'https://biasroomcdn.com/no-watermarked/J%20workspace/uploads/hdz9220acaadn9r_1_mmy8dyjg_36ya0u.jpeg'
    },
    {
        id: 13,
        nome: 'Photocard j-hope',
        categoria: 'Photocard',
        descricao: 'Photocard colecionável do j-hope',
        preco: 20,
        quantidade: 15,
        imagem: 'https://biasroomcdn.com/no-watermarked/J%20workspace/uploads/hdz924pboaigxbc_mmy8ean2_kkcsve.jpeg'
    },
    {
        id: 14,
        nome: 'Photocard Jimin',
        categoria: 'Photocard',
        descricao: 'Photocard colecionável do Jimin',
        preco: 20,
        quantidade: 15,
        imagem: 'https://biasroomcdn.com/no-watermarked/J%20workspace/uploads/hdz931xboao2gi1_mmy8eq05_r8je1v.jpeg'
    },
    {
        id: 15,
        nome: 'Photocard V',
        categoria: 'Photocard',
        descricao: 'Photocard colecionável do V (Taehyung)',
        preco: 20,
        quantidade: 15,
        imagem: 'https://biasroomcdn.com/no-watermarked/J%20workspace/uploads/hdz933mboaibjlv_mmy8f0k4_auo4sw.jpeg'
    },
    {
        id: 16,
        nome: 'Photocard Jung Kook',
        categoria: 'Photocard',
        descricao: 'Photocard colecionável do Jung Kook',
        preco: 20,
        quantidade: 15,
        imagem: 'https://biasroomcdn.com/no-watermarked/J%20workspace/uploads/hdz934vakaaonpt_mmy8f8rw_fkvzct.jpeg'
    },
    {
        id: 17,
        nome: 'Photocard OT7',
        categoria: 'Photocard',
        descricao: 'Photocard com os sete integrantes do BTS',
        preco: 30,
        quantidade: 12,
        imagem: 'https://biasroomcdn.com/no-watermarked/J%20workspace/uploads/9a8b2095-34ce-49a3-af99-562517e44849_-_copy_mmptpwb6_0repub.jpg'
    }
];


// Rota para testar o servidor
app.get('/api/check', (req, res) => {
    res.status(200).json({
        status: 'ok',
        mensagem: 'Servidor funcionando via HTTP!'
    });
});

// READ — listar todos os produtos
app.get('/api/produtos', (req, res) => {
    res.status(200).json(produtos);
});

// READ — buscar produto por ID
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

// CREATE — cadastrar produto
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

// UPDATE — atualizar produto
app.put('/api/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const indice = produtos.findIndex((p) => p.id === id);

    if (indice === -1) {
        return res.status(404).json({
            erro: 'Produto não encontrado'
        });
    }

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

// DELETE — excluir produto
app.delete('/api/produtos/:id', (req, res) => {
    const id = Number(req.params.id);

    const produtoExiste = produtos.some((p) => p.id === id);

    if (!produtoExiste) {
        return res.status(404).json({
            erro: 'Produto não encontrado'
        });
    }

    produtos = produtos.filter((p) => p.id !== id);

    res.status(200).json({
        mensagem: 'Produto excluído com sucesso'
    });
});

// Middleware 404 — manter por último entre as rotas
app.use((req, res) => {
    res.status(404).json({
        erro: `A rota ${req.method} ${req.originalUrl} não existe`
    });
});

// Middleware de erros
app.use((erro, req, res, _next) => {
    console.error('Erro de Sistema:', erro.message);

    res.status(500).json({
        erro: 'Falha interna do servidor'
    });
});
