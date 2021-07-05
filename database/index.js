
// Queries . 
const getAllTrainers = `SELECT * FROM cb12ptjs.trainers_`
const getSingleTrainer = `SELECT * FROM cb12ptjs.trainers_ WHERE trainers_id =?`
const insertNewTrainer = `INSERT INTO cb12ptjs.trainers_ (first_name,last_name,subject) VALUES (?,?,?)`
const updateCurrentTrainer = `UPDATE cb12ptjs.trainers_ SET first_name=?, last_name=?, subject=? WHERE trainer_id = ?` 
const deleteCurrentTrainer = `DELETE FROM cb12ptjs.trainers_ WHERE trainer_id=?;`


/**
 * @param  (string query FORMAT) myQuery query SQL.
 * @param  (module) mysql required database.
 * @param  (.json) config required configuration - connecting to database.
 * @param  (array) param=[]  Parameterized SQL query | Optional, empty.
 */

const database_procedure = (myQuery, mysql, config, param = []) => {
  const connection = mysql.createConnection(config);
  return async function database_results() {
    return {
      result: await new Promise((resolve, reject) => {
        connection.connect((err) => {
          err
            ? console.log("Error Connecting to server .")
            : connection.query(myQuery, param, (error, result) => {
                try {
				  error ? console.log(error) : resolve(result);
                  console.log("Server Successfully responded .");
                } catch (error) {
                  throw error;
                } finally {
                  connection.end(() => console.log("Disconnected from MySQl ."));
            	}
	   });
        });
     }),
  }};
};

module.exports = { 
	getAllTrainers,
	getSingleTrainer,
	insertNewTrainer,
	updateCurrentTrainer,
	deleteCurrentTrainer,
	database_procedure,
			}
