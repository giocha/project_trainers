// Queries . 
const getAllTrainers = `SELECT * FROM trainers_`
const getSingleTrainer = `SELECT * FROM trainers_ WHERE trainers_id =?`
const insertNewTrainer = `INSERT INTO trainers_ (first_name,last_name,subject) VALUES (?,?,?)`
const updateCurrentTrainer = `UPDATE trainers_ SET first_name=?, last_name=?, subject=? WHERE trainer_id = ?` 
const deleteCurrentTrainer = `DELETE FROM trainers_ WHERE trainer_id=?;`



/**
 * @param  {} myQuery query SQL.
 * @param  {} mysql required database.
 * @param  {} config required configuration - connecting to database.
 * @param  {} param=[]  Parameterized SQL query | Optional, empty.
 */

 const database_procedure = (myQuery, mysql, config, param = []) => {
   const connection = mysql.createConnection(config);
   return async function database_results() {
     return { result: await new Promise((resolve, reject) => {
         connection.connect((err) => {
			  err 
			  ? console.log("Error Connecting to server .") 
			  : connection.query(myQuery, param, (error, result) => {
                 try {
                   resolve(result);
                   console.log("Server Successfully responded .");
                 } catch (error) {
                   throw error;
                 } finally {
                   connection.end(() => console.log("Disconnected from MySQl ."));
                 }
               });
         	});
       	}),
     };
   };
 };

module.exports = { 
	getAllTrainers,
	getSingleTrainer,
	insertNewTrainer,
	updateCurrentTrainer,
	deleteCurrentTrainer,
	database_procedure,
	alter_id
}