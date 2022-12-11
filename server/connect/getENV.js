import dotenv from 'dotenv';
dotenv.config();
export const db_host=process.env.HOST;
export const db_user=process.env.USER;
export const db_pass=process.env.PASSWORD;
export const db_database=process.env.DATABASE;
export const db_port=process.env.PORT;

