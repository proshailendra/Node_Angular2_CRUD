# Angular2 CRUD Operations using Node.js and SQL Server
This project is using Angular2 as front-end development framework, Express for developing REST API and Sequelize as Node.js ORM to query SQL Server. 

## Sample Prerequisite 
Make sure you have installed following tools/softwares on your machine to run this project.

* Node.js
* VS Code IDE
* SQL Server

## Running Project
In order to run this project on your machine, please follow the folowing steps.

### Step 1 : Installing Node.js Dependencies
In order to install node.js server dependencies, run the following command on project root level. Here, we are using windows OS.

`C:\Node_Angular2_CRUD>npm install`

### Step 2 : Installing Angular2 Dependencies
In order to install Angular2 dependencies, first goto client folder.

`C:\Node_Angular2_CRUD>cd client`

Now, run the following command on client folder level to install Angular2 dependencies.

`C:\Node_Angular2_CRUD\client>npm install`

### Step 3 : Database Settings

Please change the database settings as per your machine within **.\server\config\db.js** file. 

```javascript
const sequelize = new Sequelize('Angular2_Node', 'sa', 'dotnettricks', {
    host: 'localhost',
    port: '1434', // default port number or sql server running port number
    dialect: 'mssql',
});
```
Make sure you have created database **Angular2_Node** with table **Users** and having columns - UserId: int, Name: varchar(50), Address: varchar(500), ContactNo: varchar(20).

### Step 4 : Run Application
In order to run your application, run the following command.

`C:\Node_Angular2_CRUD>node server`

If you are getting the message **Server is running at http://localhost:1320**, your application is running successfully.

## Release History
1.0.0