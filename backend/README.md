## :question: Como utilizar Backend
  - Entre no repositório do backend:
  
  ```
  cd backend
  ```

 - Instale todas as dependências:
  
  ```
  npm install
  ```
  
 - Depois de instalar todas as dependências será necessário criar o arquivo .env :
  ```
  cp .env.example .env
  ```
  
- Neste arquivo .env será preciso colocar os dados do banco, caso queira utilizar o docker com os comandos já estão definidos no arquivo .env.example, basta rodar esse comando:
```
docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_PASSWORD=docker -e MYSQL_USER=mysql -e MYSQL_DATABASE=dbmysql -p 3306:3306 -d mysql --default-authentication-plugin=mysql_native_password
```

- Depois de verificar se o banco está funcionamendo corretamente, é preciso rodar as migrations
```
adonis migration:run
```

- Para executar o servidor
```
adonis serve --dev
```

## :question: Rotas da aplicação
| Route        | Verb(s)  | Handle                  | Middleware | Name         |
|--------------|----------|-------------------------|------------|--------------|
| /user        | POST     | UserController.create   |            | /user        |
| /login       | POST     | UserController.login    |            | /login       |
| /registrar   | POST     | ClientController.create |            | /registrar   |
| /validar     | HEAD,GET | ClienteController.index | auth       | /validar     |
| /validar/:id | PUT      | ClientController.update | auth       | /validar/:id |

- /user: Responsável por criar um usuario admin.
- /login: É preciso fazer login para poder listar e validar outros usuários.
- /registrar: Responsável por criar o cliente.
- /validar: Responsável por listar tados os clients, é preciso estar autenticado.
- /validar/:Id: Responsável por editar se um cliente está validado ou não, é preciso estar autenticado.

## :question: Exemplos de requisições
- /user
```
{
 "username": "gabrielantero",
 "email": "gabrielantero2012@hotmail.com",
 "password": "123456",
}
```
- /login: 
```
{
 "email": "gabrielantero2012@hotmail.com",
 "password": "123456"
}
```

- /registrar
```
{
 "name": "Carlos Gabriel Antero",
 "email": "gabrielantero2012@hotmail.com",
 "cpf": "000.000.000-00",
 "skills": {
	"firstSkill": "Gestão de Projetos",
	"secondSkill": "Controle Financeiro",
	"thirdSkill": "DevOps"
 },
 "phone": "(00) 00000-0000"
}
```
