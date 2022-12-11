import mysql from 'mysql';
import {db_host,db_user,db_pass,db_database,db_port,db_conn_time} from './getENV.js';


export const db=mysql.createPool({
    host:db_host,
    user:db_user,
    password:db_pass,
    database:db_database,
});

export const Connection = (props) =>{
    return new Promise((successful, crash) => 
    {
        if(db.config.acquireTimeout===parseInt(db_conn_time))
        {
            successful();
        }
        else
        {
            crash("connection not created!!");
        }
    });
}


export default db;