import { openDatabase } from "react-native-sqlite-storage";

const myDb = openDatabase({
    name: "edu_app_db"
});


//create tables
export const createTables = () =>   {
    //Course table
    myDb.transaction((txn) => {
        txn.executeSql();
    });
    //Student table
    myDb.transaction((txn) => {

    });
    //Users table
    myDb.transaction((txn) => {

    });
};