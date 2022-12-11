import mysql from 'mysql';
import {db_host,db_user,db_pass,db_database,db_port,} from './getENV.js';


export const db=mysql.createConnection({
    host:db_host,
    user:db_user,
    password:db_pass,
    database:db_database,
});

export const Connection = (props) =>{
    return new Promise((successful, crash) => 
    {
        db.connect((err) => 
        {
            if (err) 
            {
                crash(err);
            } 
            else 
            {
                successful();
            }
        });
    });
}


export default db;