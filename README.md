## Projeto To-Do List com Node, React e Banco de Dados PostgreSQL

Bem-vindo a ponderada de To-Do List, uma aplicação simples para gerenciar suas tarefas do dia-a-dia. Este projeto utiliza as tecnologias Node.js, React e PostgreSQL, e oferece um ambiente de desenvolvimento usando Docker Compose para facilitar a configuração e execução.

### Arquitetura da Solução

O projeto é composto por três principais componentes:

1. **Backend (Node.js):** Responsável por fornecer APIs para criar, ler, atualizar e deletar tarefas. Utiliza o Express.js como framework, e se conecta ao banco de dados PostgreSQL para persistência de dados.
2. **Frontend (React):** Interface de usuário onde os usuários podem interagir com as tarefas. Permite a criação, edição, conclusão e remoção de tarefas.
3. **Banco de Dados (PostgreSQL):** Armazena as informações das tarefas, incluindo seus detalhes como título, descrição e status de conclusão.

### Como Rodar usando Docker Compose

Certifique-se de que você tenha o Docker e o Docker Compose instalados em sua máquina antes de prosseguir.

1. **Clone o Repositório:**

   ```
   git clone https://github.com/gustavofdeoliveira/ToDo.git
   cd to-do-list
   ```
2. **Configuração do Banco de Dados:**

   - No diretório `backend`, crie um arquivo chamado `.env` e configure as variáveis de ambiente para o banco de dados:
     ```
     DB_HOST=db
     DB_PORT=5432
     DB_USER=postgres
     DB_PASS=mysecretpassword
     DB_NAME=tododb
     ```
3. **Rodando o Docker Compose:**

   - No diretório raiz do projeto, onde está o arquivo `docker-compose.yml`, execute o comando:
     ```
     docker-compose up
     ```

   Isso criará os containers para o backend, frontend e banco de dados, e os serviços estarão disponíveis nas seguintes URLs:

   - Backend API: http://localhost:3001
   - Frontend UI: http://localhost:3000
   - Banco de Dados PostgreSQL: Host: `localhost`, Porta: `5432`
4. **Acessando o Frontend:**
   Abra o navegador e acesse `http://localhost:3000` para interagir com a interface de usuário do To-Do List.
5. **Parando os Serviços:**
   Quando quiser parar os serviços, vá para o terminal onde o `docker-compose` está rodando e pressione `Ctrl+C`. Para remover os containers e redes, execute:

   ```
   docker-compose down
   ```

Aproveite o gerenciamento de tarefas simplificado com seu novo To-Do List!
