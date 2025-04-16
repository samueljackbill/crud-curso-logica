### COMO RODAR O PROJETO BAIXADO


Startar o MySQL pelo XAMPP
```
Porta padrão 3306
```


Criar banco de dados "crud"
```
CREATE DATABASE crud;
```


Criar tabela "usuarios"
```
CREATE TABLE `crud`.`usuarios` (`id` INT NOT NULL AUTO_INCREMENT , `nome` VARCHAR(255) NOT NULL , `email` VARCHAR(255) NOT NULL , `fone` VARCHAR(45) NOT NULL , `data_nascimento` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
```


Inserir registros na tabela "usuarios"
```
INSERT INTO `usuarios` (`nome`, `email`, `fone`, `data_nascimento`) VALUES ('Samuel Pires', 'samueljackbill@gmail.com', '(63)99214-0309', '1995-05-23');
INSERT INTO `usuarios` (`nome`, `email`, `fone`, `data_nascimento`) VALUES ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
INSERT INTO `usuarios` (`nome`, `email`, `fone`, `data_nascimento`) VALUES ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
INSERT INTO `usuarios` (`nome`, `email`, `fone`, `data_nascimento`) VALUES ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
INSERT INTO `usuarios` (`nome`, `email`, `fone`, `data_nascimento`) VALUES ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
INSERT INTO `usuarios` (`nome`, `email`, `fone`, `data_nascimento`) VALUES ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
INSERT INTO `usuarios` (`nome`, `email`, `fone`, `data_nascimento`) VALUES ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
INSERT INTO `usuarios` (`nome`, `email`, `fone`, `data_nascimento`) VALUES ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
INSERT INTO `usuarios` (`nome`, `email`, `fone`, `data_nascimento`) VALUES ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
INSERT INTO `usuarios` (`nome`, `email`, `fone`, `data_nascimento`) VALUES ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
INSERT INTO `usuarios` (`nome`, `email`, `fone`, `data_nascimento`) VALUES ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
```


Criar pasta "api" na raiz do projeto


Criar pasta "frontend" na raiz do projeto


Entrar na pasta "api" pelo terminal do VS CODE
```
cd api
```


Instalar o Node.js no computador


Criar projeto node
```
npm init -y
```
Em casos de erro abrir o Windows Power Shell como Administrador e executar o seguinte comando:
```
Set-ExecutionPolicy Unrestricted
```
Verificar com o comando:
```
Get-ExecutionPolicy
```


Instalar bibliotecas que serão usadas no projeto
```
yarn add express nodemon mysql cors
```
* Express -> Construção da API
* Nodemon -> Compilar o Node em tempo real, não precisando parar o projeto e startar novamente a cada modificação no código
* MySQL -> Banco de Dados
* Cors -> Evitar conflitos devido ao projeto estar rodando localmente
Em caso de erro adicionar instalar yarn com o comando:
```
npm install -g yarn
```


Alterar arquivo "package.json"
* Adicionar a seguinte informação embaixo do bloco "main":
```
"type": "module",
```
Colocar a seguinte informação sobrescrevendo o texto existente no bloco "scripts":
```
"start": "nodemon index.js"
```


Criar arquivo "index.js"
* Preencher arquivo "index.js"


### Rodar o projeto


Comando para executar o projeto
```
yarn start
```


Visualizar os dados no navegador
```
http://localhost:8800
```


Criar arquivo "db.js" dentro da pasta "api"
* Preencher arquivo "db.js"


Criar pasta "routes" dentro da pasta "api"
* Criar arquivo "alunos.js" dentro da pasta "routes"
* Preencher arquivo "alunos.js"


Criar pasta "controllers" dentro da pasta "api"
* Criar arquivo "aluno.js" dentro da pasta "controllers"
* Preencher arquivo "aluno.js"


Rodar novamente o projeto com o comando:
```
yarn start
```
Deve estar trazendo todos os registros da tabela "alunos" do banco de dados


### Implementando o Frontend
Iniciar o frontend acessando a raiz do projeto ou voltando uma pasta através do terminal
```
cd ..
```
Entrar na pasta frontend
```
cd frontend
```


Criar o projeto com React via npx
```
npx create-react-app ./
```


Limpar o terminal para depois instalar as bibliotecas
```
cls
```


Instalar as bibliotecas do frontend
```
yarn add styled-components axios react-icons react-toastify 
```
* Styled Components -> Será usado na estilização
* Axios -> Consumir a API que foi construída no backend
* React Icons -> Carregar os ícones de edição (lápis) e exclusão (lixeira)
* React Toastify -> Feedback ao relizar alguma ação  como cadastar, editar e excluir


Limpar o projeto apagando arquivos que não serão utilizados
* Ir na pasta public e apagar todos os outros arquivos, deixando apenas o arquivo "index.html"
* Limpar arquivo "index.html" retirando as informações desnecessárias
* Importar a fonte Poppins do Google dentro do arquivo "index.html"
* Limpar arquivo "index.js" dentro da pasta "src"


Limpar pasta "src" deixando apenas os arquivos necessparios para o projeto
* Deixar apenas os arquivos "App.js" e "index.js"


Adicionar uma estilização global criando a pasta "styles" dentro de src
* Criar o arquivo "global.js" dentro da pasta "styles"
* Preencher arquivo "global.js"


Limpar arquivo "App.js" e depois implementar arquivo "App.js" dentro da pastar "src"


Criar dentro de "src" a pasta "components"
* Criar o arquivo "Form.js" dentro da pasta "components"
* Implementar arquivo "Form.js"


Testar o projeto rodando o node no terminal "backend-node" (Comando dentro da pasta api)
```
yarn start
```
Testar o projeto rodando o react no terminal "frontend-react" (Comando dentro da pasta frontend)
```
yarn start
```


Implementar o Grid para mostrar os registros do banco de dados
* No arquivo "App.js" que fica dentro do path "frontend/src" importar a bilioteca
* Depois inserir a tag dentro do formulário
* Criar e implementar arquivo "Grid.js" dentro da pasta "components"


Implementar arquivo "App.js" para receber os registros do banco de dados
* Importar o useState
* Implementar as variáveis
* Importar o axios
* Implementar a função
* Importar o useEffect
* Implementar a função


Implementar o método POST, usado para cadastrar novos registros no banco de dados
* Implementar o método "addUser" dentro do arquivo "aluno.js" que fica no path "api/controllers"


Alterar arquivo de rotas inserindo as ações de criar, editar e excluir registros
* O arquivo "aluno.js" fica dentro do path "api/routes"


Implementar as ações de edição e exclusão no Grid
* O arquivo "Grid.js" fica no path "frontend/src/components"


Importar no formulário o useEffect
* Necessário identificar se a ação do usuário é de cadastro ou de edição


### Testar Projeto Finalizado


Executar o backend e o frontend
```
yarn start
```
```
Frontend - React: http://localhost:3000 
```
```
Backend - Node: http://localhost:8800
```