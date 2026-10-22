# 💜 Borahae Boutique

Uma aplicação web para gerenciamento de catálogo de produtos inspirados no BTS, desenvolvida como projeto individual da atividade de Front-end.

## 📖 Sobre o projeto

A **Borahae Boutique** é uma aplicação criada para facilitar a organização e o gerenciamento de produtos relacionados ao universo do BTS, como álbuns, lightsticks, photocards, camisetas e outros itens.

O sistema possui uma interface intuitiva e responsiva, permitindo visualizar o catálogo e consultar informações dos produtos. Também disponibiliza uma área administrativa para cadastrar, listar, editar e excluir produtos.

O projeto utiliza **Next.js** no frontend e **Node.js com Express** no backend, com armazenamento dos dados em um array em memória.

## 🎯 Objetivos

- Facilitar o gerenciamento do catálogo de produtos.
- Organizar as informações de cada item.
- Permitir operações CRUD por meio de uma API REST.
- Disponibilizar uma interface simples, organizada e responsiva.
- Praticar a integração entre frontend e backend.

## ✨ Funcionalidades

- **Listagem de produtos:** visualização dos produtos cadastrados.
- **Detalhes do produto:** consulta de informações individuais, como nome, categoria, descrição, preço, quantidade em estoque e imagem.
- **Cadastro de produtos:** inclusão de novos itens no catálogo.
- **Edição de produtos:** atualização das informações dos itens cadastrados.
- **Exclusão de produtos:** remoção de itens do catálogo.
- **Filtro por categoria:** facilita a localização de produtos específicos.
- **Indicação de estoque:** destaque visual para produtos com quantidade inferior a 10 unidades.
- **Mensagens de retorno:** feedback para operações realizadas na aplicação.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Finalidade |
| --- | --- |
| HTML5 | Estruturação do conteúdo |
| CSS3 | Estilização e responsividade |
| JavaScript | Lógica e interatividade |
| React | Construção de componentes e interfaces |
| Next.js | Desenvolvimento do frontend com App Router |
| Node.js | Execução do backend |
| Express | Criação da API REST |
| Bootstrap | Estilização e componentes responsivos |
| Git e GitHub | Versionamento e hospedagem do código |

## 📂 Estrutura do projeto

```text
ATV_PFEND1_INDIVIDUAL/
├── backend/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── catalogo/
│   │   │   │   ├── [id]/
│   │   │   │   └── page.jsx
│   │   │   ├── produtos/
│   │   │   │   └── page.jsx
│   │   │   ├── page.jsx
│   │   │   ├── layout.jsx
│   │   │   └── globals.css
│   │   └── components/
│   └── package.json
│
└── README.md
```

*Observação: a estrutura acima apresenta os principais arquivos e diretórios do projeto; arquivos adicionais podem existir no repositório.*

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, instale:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- Um editor de código, como o [Visual Studio Code](https://code.visualstudio.com/)

### 1. Clonar o repositório

Abra o terminal e execute:

```bash
git clone https://github.com/ajtelesnavarro/ATV_PFEND1_INDIVIDUAL.git
```

Entre na pasta do projeto:

```bash
cd ATV_PFEND1_INDIVIDUAL
```

### 2. Instalar as dependências

No terminal, acesse a pasta do backend:

```bash
cd backend
npm install
```

Em seguida, acesse a pasta do frontend em outro terminal:

```bash
cd frontend
npm install
```

### 3. Iniciar o backend

No terminal aberto na pasta `backend`, execute:

```bash
npm start
```

Caso o comando `npm start` não esteja configurado no `package.json`, execute o arquivo de inicialização diretamente:

```bash
node server.js
```

A API deve estar disponível em `http://localhost:3000`, conforme a configuração utilizada pela aplicação.

### 4. Iniciar o frontend

Em outro terminal, dentro da pasta `frontend`, execute:

```bash
npm run dev -- -p 3001
```

A aplicação frontend ficará disponível em:

**http://localhost:3001**

O uso da porta 3001 permite manter o frontend separado da API, que utiliza a porta 3000.

> **Importante:** mantenha os dois terminais abertos enquanto estiver utilizando a aplicação. Se as portas estiverem configuradas de outra forma nos arquivos do projeto, ajuste os comandos e a URL da API conforme necessário.

## 🔌 API e armazenamento de dados

O backend utiliza Express para disponibilizar endpoints HTTP que permitem consultar e manipular os produtos.

As operações implementadas seguem o padrão CRUD:

| Método HTTP | Operação | Finalidade |
| --- | --- | --- |
| `GET` | Read | Consultar produtos |
| `POST` | Create | Cadastrar um produto |
| `PUT` | Update | Atualizar um produto |
| `DELETE` | Delete | Excluir um produto |

A rota base utilizada para os produtos é:

```text
http://localhost:3000/api/produtos
```

O projeto utiliza um **array em memória** para armazenar os dados. Por isso, as alterações realizadas durante a execução não são persistidas em um banco de dados e podem ser perdidas quando o backend é reiniciado.

## 🎨 Identidade visual

A identidade visual da Borahae Boutique foi inspirada no universo do BTS, com uma paleta de tons roxos e uma proposta delicada e organizada.

O layout utiliza componentes responsivos e estilos personalizados para oferecer uma experiência de navegação consistente em diferentes tamanhos de tela.

## 📌 Escopo do projeto

O foco da aplicação é o gerenciamento do catálogo de produtos.

Não fazem parte do escopo atual funcionalidades como:

- Carrinho de compras.
- Processamento de pagamentos.
- Gerenciamento de clientes.
- Controle de pedidos e vendas.

## 🎓 Contexto acadêmico

Projeto individual desenvolvido para a atividade de Front-end, com o objetivo de aplicar conhecimentos de desenvolvimento web, componentes React, Next.js, criação de APIs REST, operações CRUD e integração entre frontend e backend.


---

Feito com 💜 e inspiração no BTS.