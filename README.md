# BarberApp

O **Barber App** é um sistema pensado para estabelecimentos prestadores de servicos de beleza em geral, com foco inicial no gerenciamento de agendamentos. No sistema é possível cadastrar prestadores(funcionarios), efetuar os agendamentos e verificar agenda.
O projeto é divido em 3 aplicacoes:
- **Servidor (API)**:

    Onde é realizado toda lógica de negócio e o fluxo de dados.

    Repositório: https://github.com/vinic-asouza/barberapp-api.git

- **Sistema WEB**:

    Repositório: https://github.com/vinic-asouza/barberapp-web.git

    Ambiente para uso do estabelicimento/prestador onde é possível realizar o cadastro dos prestadores, gerenciar o perfil e verificar a agenda.

- **App Mobile**:

    Repositório: https://github.com/vinic-asouza/barberapp-mobile.git

    Ambiente para uso dos clientes, onde é possível se cadastrar e realizar os agendamentos de servicos.

# Servidor (API )
API do sistema BarberApp.

# Tecnologias utilizadas:

- Node.js
- Express
- Nodemon
- Sucrase
- Docker
- Sequelize
- PostgreSQL
- node-postgres
- Redis
- MongoDB
- Mongoose
- JWT
- Multer
- Bcrypt
- Youch
- Yup
- Bee Queue
- Nodemailer
- date-fns
- Sentry
- DotEnv
- VS Code with ESLint

# Intruções para inicialização do projeto (utilizando Docker):

**Criando bases de dados necessárias: (obs: substituir "nome-database" e "senha-database" para nomes e senhas de sua escolha)**

    $ docker run --name "nome-database" -e POSTGRES_PASSWORD="senha-database" -p 5432:5432 -d postgres:11

Obs: Dentro da database é criado por padrão uma base de dados com o nome "postgres", é necessário criar uma nova base de dados com o nome: "gobarber", utilizando Postbird ou algum outro gerenciador.

    $ docker run --name "nome-database" -p 27017:27017 -d -t mongo

    $ docker run --name "nome-database" -p 6379:6379 -d -t redis:alpine

**Inicializando todas as bases de dados:**

    $ docker start "nome-database" (fazer isso para as 3 databases criadas)

**Rodando as migrations do projeto, para criação das tabelas (utilizando Sequelize):**

    $ yarn sequelize db:migrate

**Definindo as variáveis de ambiente:**

Criar arquivo .env na raiz do projeto, seguindo o exemplo do arquivo .env.example, configurando de acordo com suas informações previamente criadas

**Inicializando API:**

    $ yarn run dev

**Iniciar serviço de Filas (Redis), em segundo plano:**

    $ yarn run queue
