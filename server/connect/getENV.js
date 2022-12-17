import dotenv from "dotenv";
dotenv.config();
export const db_host = process.env.HOST;
export const db_user = process.env.USER;
export const db_pass = process.env.PASSWORD;
export const db_database = process.env.DATABASE;
export const db_port = process.env.PORT;
export const db_conn_time = process.env.TIME;
export const JWT_SECRET = process.env.JWT_SECRET;
