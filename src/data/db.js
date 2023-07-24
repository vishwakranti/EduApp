//import { openDatabase } from "react-native-sqlite-storage";

import * as SQLite from "expo-sqlite";

function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("db.db");
  return db;
}

const myDb = openDatabase({
    name: "edu_app_db",
});

//logger
let suppressSuccessMessage = true;
const DatabaseLogger = (message, isSuccess, rowsAffected = null, data = null) => {
  if (isSuccess && suppressSuccessMessage)
    return;
  console.log(`${message}${rowsAffected !== null && "RowsAffected: " + rowsAffected}`);
  if (data !== null)
    console.log(`Extra Data: ${data}`);
}

//create tables
export const createTables = () =>   {
    //Course table
    myDb.transaction((txn) => {
        txn.executeSql(
            `CREATE TABLE IF NOT EXISTS Courses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            courseName TEXT,
            courseDescription TEXT,
            userName TEXT
          );`,
          [],
          (sqlTxn, res) => {
            DatabaseLogger('Courses table created successfully', true)
          },
          (error) => {
            DatabaseLogger('Error creating Courses table: ${error}', false)
          }
        );
    });
    //Student table
    myDb.transaction((txn) => {
        txn.executeSql(
            `CREATE TABLE IF NOT EXISTS Students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            firstName TEXT,
            lastName TEXT,
            email TEXT,
            address TEXT
          );`,
          [],
          (sqlTxn, res) => {
            DatabaseLogger('Students table created successfully', true)
          },
          (error) => {
            DatabaseLogger('Error creating Students table: ${error}', false)
          }
        );
    });
    //Users table
    myDb.transaction((txn) => {
        txn.executeSql(
            `CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userName TEXT,
            userPassword TEXT,
            email TEXT
          );`,
          [],
          (sqlTxn, res) => {
            DatabaseLogger('Users table created successfully', true)
          },
          (error) => {
            DatabaseLogger('Error creating Users table: ${error}', false)
          }
        );
    });
};

//Insert database methods
export const createCourse = async (courseName, courseDescription, userName) => {
  try{
    await (await myDb).transaction(async (txn) => {
      `INSERT INTO Course (courseName, courseDescription, userName) VALUES (?, ?, ?);`,
      [courseName, courseDescription, userName],
      (sqlTxn, results) => {
        DatabaseLogger(`createCourse successfully inserted with ID of : ${results.insertId}`, true, results.rowsAffected);
      }
    });
  } catch (error){
    DatabaseLogger(error, false);
  }
};

//Get database methods
export const getAllCourses = async() => {
  return new Promise(async (resolve, reject) => {
    await myDb.transaction(
      (txn) => {
        txn.executeSql(
          `SELECT * FROM Course;`,
          [],
          (_, result) => {
            const courses = result.rows.raw();
            resolve(courses);
          },
          (_, error) => {
            reject(new Error('Failed to retrieve lists. ' + error));
          }
        );
      }
    );
  });
};
