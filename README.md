# Trainers modeling

*Implementation of a CRUD using MVC for the model ~Trainer.*

- Create Trainer
- Read Trainer > Information
- Update Trainer > information
- Delete Trainer



> **Information** : As referenced in MySQL database table ( **trainers_** ) , 

      1.  id         :  trainer_id 
      2.  first name :  first_name 
      3.  last name  :  last_name 
      4.  subject    :  subject 

## Steps, by step # Windows terminal, Visual Studio

> **Installation**

     mkdir your_project_name
     git clone https://github.com/giocha/project_trainers.git
     npm install
     npm i nodemon (optional)
     

#### 1. Useful Commands

> This project uses ***nodemon*** as to rr server, **should be installed** to use the below command,
 check: ( package.json ) > script 
 
      npm run start

#### 2. Config folder 

> Contains a .json file with information about connecting to MySQL,  
**don't forget to add your credentials**

#### 3. MySQL

> Check your table's column names or configure them inside your project directory under the folder database **(index.js)**


#### 4. Port, <http://localhost:3005/>

> Is defaulted at :3005, use the below command to change port if needed. (windows terminal)

      set PORT=<port_number>


## Additional info for this project with Node.js (***Required***)

1. Express :<https://www.npmjs.com/package/express>
2. MySQL   :<https://www.npmjs.com/package/mysql2>
3. EJS     :<https://www.npmjs.com/package/ejs>




