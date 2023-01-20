# Dungeons & Dragons

Aplicação realizada enquanto aluno da [Trybe](https://www.betrybe.com/) para reforçar os conhecimentos sobre 
[programação orientada a objetos](https://blog.betrybe.com/tecnologia/poo-programacao-orientada-a-objetos/#:~:text=A%20programa%C3%A7%C3%A3o%20orientada%20a%20objetos,que%20existe%20s%C3%A3o%20os%20objetos.)
e [SOLID](https://blog.betrybe.com/linguagem-de-programacao/solid-cinco-principios-poo/).

O projeto consiste em desenvolver um jogo RPG chamado Dungeons & Dragons. Os jogadores controlam personagens com raças distintas, cada uma com suas próprias características e habilidades especiais. As raças disponíveis incluem Orcs, Elfos, Anões e Halflings. Para ampliar ainda mais a jogabilidade e as possibilidades de personalização, os personagens também podem ser divididos em arqueótipos, tais como Magos, Necromantes, Rangers e Guerreiros.

Os personagens possuem talentos especiais e as batalhas são um aspecto importante do jogo. Além disso, foram implementados mecanismos como a vida, força, energia, level entre outros para o progresso dos personagens. 
Em resumo, o jogo Dungeons & Dragons é um jogo de aventura, onde os jogadores podem explorar um mundo fantástico, enfrentar desafios épicos e evoluir seus personagens.

<br>

<details>
  <summary><strong>Como instalar o Projeto Dungeons & Dragons</strong></summary><br />

## Instalação
 
<hr>
 
### Rodando a aplicação via [Docker](https://www.docker.com/)

> - :warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.

> - :warning: Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima

> - :warning: Se você se deparar com o erro abaixo, quer dizer que sua aplicação já esta utilizando a `porta 3000`, seja com outro processo do Node.js (que você pode parar com o comando `killall node`) ou algum container! Neste caso você pode parar o container com o comando `docker stop <nome-do-container>`

<br>

- Clone o repositório `git@github.com:Rafael-Souza-97/dungeons-and-dragons.git`:

```bash
git clone git@github.com:Rafael-Souza-97/dungeons-and-dragons.git
```

<br>

- Entre na pasta do repositório que você acabou de clonar:

```bash
cd dungeons-and-dragons
```

<br>

- Rode o serviço `node` com o comando `docker-compose up -d`:

 > - Esse serviço irá inicializar um container chamado `trybers_and_dragonsb`.
 > - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.
 
```bash
docker-compose up -d
```

<br>

- Use o comando `docker exec -it trybers_and_dragons bash`:

 > - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

```bash
docker exec -it trybers_and_dragons bash
```

<br>

- Instale as depëndencias, caso necessário, com `npm install` (dentro do bash do container):

```bash
npm install
```

 > Execute a aplicação com `npm start`:
 
 ```bash
npm start
```

<br>
<hr>
 
### Rodando a aplicação SEM [Docker](https://www.docker.com/)

 > :warning: Para rodar a aplicação desta forma, obrigatoriamente você deve ter o [Node](https://nodejs.org/en/) instalado em seu computador.
 
<br>

- Clone o repositório `git@github.com:Rafael-Souza-97/dungeons-and-dragons.git`:

```bash
git clone git@github.com:Rafael-Souza-97/dungeons-and-dragons.git
```

<br>

- Entre na pasta do repositório que você acabou de clonar:

```bash
cd dungeons-and-dragons
```

- Instale as depëndencias com `npm install`:

```bash
npm install
```

 > Execute a aplicação com `npm start`:
 
 ```bash
npm start
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

## Preview

https://user-images.githubusercontent.com/99055008/213593288-f4792dae-9a14-4adb-b50f-2edd304112f5.mp4
