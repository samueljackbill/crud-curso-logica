### COMO RODAR O PROJETO

Executar o MySQL através do XAMPP

Utilizar o VS CODE para editar os códigos e visualizar melhor as pastas

Criar banco de dados "crud"
```
CREATE DATABASE crud;
```

Criar tabela chamada "alunos"
```
CREATE TABLE `crud`.`alunos` (`id` INT NOT NULL AUTO_INCREMENT , `nome` VARCHAR(255) NOT NULL , `email` VARCHAR(50) NOT NULL , `telefone` VARCHAR(50) NOT NULL , `data_nascimento` DATE NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
```

Inserir ao menos 10 registros na tabela "alunos"
```
insert into alunos (nome, email, telefone, data_nascimento) values ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
insert into alunos (nome, email, telefone, data_nascimento) values ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
insert into alunos (nome, email, telefone, data_nascimento) values ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
insert into alunos (nome, email, telefone, data_nascimento) values ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
insert into alunos (nome, email, telefone, data_nascimento) values ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
insert into alunos (nome, email, telefone, data_nascimento) values ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
insert into alunos (nome, email, telefone, data_nascimento) values ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
insert into alunos (nome, email, telefone, data_nascimento) values ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
insert into alunos (nome, email, telefone, data_nascimento) values ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
insert into alunos (nome, email, telefone, data_nascimento) values ('Teste', 'teste@teste.com', '(00)00000-0000', '0000-00-00');
```

Criar uma pasta na raiz do projeto chamada "frontend"

Criar uma pasta na raiz do projeto chamada "node"