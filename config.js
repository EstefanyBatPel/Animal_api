import 'dotenv/config';


export const DB_USERNAME = process.env.USER_NAME;  
export const DB_PASSWORD = process.env.SECRET_KEY; 
export const PORT = process.env.PORT || 5000;
export const DB_TEST = process.env.DATABASE_TEST;

export const DB_NAME_DEV = process.env.DATABASE_DEV;
export const NODE_ENV = process.env.NODE_ENV;
export const DB_NAME_TEST = process.env.DATABASE_TEST;