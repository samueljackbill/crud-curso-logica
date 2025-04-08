### COMO RODAR O PROJETO BAIXADO


Startar o MySQL pelo XAMPP
```
Porta padrão 3306
```


Criar banco de dados "crud"
```
CREATE DATABASE crud;
```


Criar tabela "alunos"
```
CREATE TABLE `crud`.`alunos` (`id` INT NOT NULL AUTO_INCREMENT , `nome` VARCHAR(255) NOT NULL , `email` VARCHAR(255) NOT NULL , `telefone` VARCHAR(45) NOT NULL , `data_nascimento` DATE NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
```


Inserir registros na tabela "alunos"
```
INSERT INTO `alunos` (`nome`, `email`, `telefone`, `data_nascimento`) VALUES ('Samuel Pires', 'samueljackbill@gmail.com', '(63)99214-0309', '1995-05-23');
INSERT INTO `alunos` (`nome`, `email`, `telefone`, `data_nascimento`) VALUES ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
INSERT INTO `alunos` (`nome`, `email`, `telefone`, `data_nascimento`) VALUES ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
INSERT INTO `alunos` (`nome`, `email`, `telefone`, `data_nascimento`) VALUES ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
INSERT INTO `alunos` (`nome`, `email`, `telefone`, `data_nascimento`) VALUES ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
INSERT INTO `alunos` (`nome`, `email`, `telefone`, `data_nascimento`) VALUES ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
INSERT INTO `alunos` (`nome`, `email`, `telefone`, `data_nascimento`) VALUES ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
INSERT INTO `alunos` (`nome`, `email`, `telefone`, `data_nascimento`) VALUES ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
INSERT INTO `alunos` (`nome`, `email`, `telefone`, `data_nascimento`) VALUES ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
INSERT INTO `alunos` (`nome`, `email`, `telefone`, `data_nascimento`) VALUES ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
INSERT INTO `alunos` (`nome`, `email`, `telefone`, `data_nascimento`) VALUES ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
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
Adicionar a seguinte informação embaixo do bloco "main":
```
"type": "module",
```
Colocar a seguinte informação sobrescrevendo o texto existente no bloco "scripts":
```
"start": "nodemon index.js"
```


Criar arquivo "index.js"
Preencher arquivo "index.js"


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
Preencher arquivo "db.js"


Criar pasta "routes" dentro da pasta "api"
Criar arquivo "alunos.js" dentro da pasta "api"
Preencher arquivo "db.js"


Criar pasta "controllers" dentro da pasta "api"
Criar arquivo "aluno.js" dentro da pasta "controllers"
Preencher arquivo "aluno.js"


Rodar novamente o projeto com o comando:
```
yarn start
```
Deve estar trazendo todos os registros da tabela "alunos" do banco de dados