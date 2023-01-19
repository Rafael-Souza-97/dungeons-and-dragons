# Dungeons & Dragons

Aplicação realizada enquanto aluno da [Trybe](https://www.betrybe.com/) para reforçar os conhecimentos sobre 
[Programação Orientada a Objetos](https://blog.betrybe.com/tecnologia/poo-programacao-orientada-a-objetos/#:~:text=A%20programa%C3%A7%C3%A3o%20orientada%20a%20objetos,que%20existe%20s%C3%A3o%20os%20objetos.)
e [Solid](https://blog.betrybe.com/linguagem-de-programacao/solid-cinco-principios-poo/).

O projeto consiste em desenvolver um jogo RPG (Role Playing Game) chamado Dungeons & Dragons.
No jogo, os personagens possuem raças com características específicas e habilidades especiais. As raças incluem Orcs, Elfos, Dwarfs e Halflings.
Além das raças, os personagens podem ser divididos em arqueotipos, como Magos, Necromancers, Rangers e Warriors.

Os personagens possuem talentos especiais e as batalhas são um aspecto importante do jogo. Além disso, foram implementados mecanismos como a vida, força, energia, level entre outros para o progresso dos personagens. 
Em resumo, o jogo Dungeons & Dragons é uma aventura épica para os jogadores, onde eles podem explorar um mundo fantástico, enfrentar desafios épicos e evoluir seus personagens.

### Utilização

A aplicação possui as seguintes rotas para realizar as operações de CRUD de posts:

- `GET` /products /orders ou /users: Retorna a lista de todos os produtos, ordens ou usuários existentes no banco de dados;
- `POST` /products /orders ou /users: Cria um novo produtom ordem ou usuário com os dados enviados no corpo da requisição;
- `POST` /login: valida o login dos usuários na aplicação com [JSON Web Token (JWT)](https://jwt.io/);

<br>

<details>
  <summary><strong>Como instalar o Projeto Smith</strong></summary><br />

## Instalação
 
<hr>
 
### Rodando a aplicação via [Docker](https://www.docker.com/)

> - :warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.

> - :warning: Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima

> - :warning: Se você se deparar com o erro abaixo, quer dizer que sua aplicação já esta utilizando a `porta 3000`, seja com outro processo do Node.js (que você pode parar com o comando `killall node`) ou algum container! Neste caso você pode parar o container com o comando `docker stop <nome-do-container>`

<br>

- Clone o repositório `git@github.com:Rafael-Souza-97/smith-project.git`:

```bash
git clone git@github.com:Rafael-Souza-97/smith-project.git
```

<br>

- Entre na pasta do repositório que você acabou de clonar:

```bash
cd smith-project
```

<br>

- Rode o serviço `node` com o comando `docker-compose up -d`:

 > - Esse serviço irá inicializar um container chamado `trybesmith_db` e outro chamado `trybesmith_db`.
 > - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.
 
```bash
docker-compose up -d --build
```

<br>

- Use o comando `docker exec -it trybesmith bash`:

 > - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
 > - As credencias de acesso ao banco de dados estão definidas no arquivo `docker-compose.yml`, e são acessíveis no container através das variáveis de ambiente `MYSQL_USER` e `MYSQL_PASSWORD`.

```bash
docker exec -it trybesmith_db bash
```

<br>

- Instale as depëndencias, caso necessário, com `npm install` (dentro do bash do container):

```bash
npm install
```

 > Execute a aplicação com `npm run dev`:
 
 ```bash
npm run dev
```

<br>
<hr>
 
### Rodando a aplicação SEM [Docker](https://www.docker.com/)

 > :warning: Para rodar a aplicação desta forma, obrigatoriamente você deve ter o [Node](https://nodejs.org/en/) instalado em seu computador.
 
<br>

- Clone o repositório `git@github.com:Rafael-Souza-97/smith-project.git`:

```bash
git clone git@github.com:Rafael-Souza-97/smith-project.git
```

<br>

- Entre na pasta do repositório que você acabou de clonar:

```bash
cd smith-project
```

- Instale as depëndencias com `npm install`:

```bash
npm install
```

 > Execute a aplicação com `npm run dev`:
 
 ```bash
npm run dev
```

<hr>

<br>

</details>
  
## Autor

- [Rafael Souza](https://github.com/Rafael-Souza-97)

## Referências

 - [Trybe](https://www.betrybe.com/)

## Tecnologias / Ferramentas utilizadas

- [Typescript](https://www.typescriptlang.org/)
- [Node](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Zoom](https://zoom.us/)
- [Slack](https://slack.com/intl/pt-br/)
- [ESLint](https://eslint.org/)
- [VsCode](https://code.visualstudio.com/)
- [Git](https://git-scm.com/) & [GitHub](https://github.com/)
- [Linux - Ubuntu](https://ubuntu.com/)

## Infos Adicionais

- ###### Percentual de cumprimento de requisitos ([Trybe](https://www.betrybe.com/))- 100%
