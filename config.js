import 'dotenv/config';

export const DB_NAME = process.env.DATABASE; 
export const DB_USERNAME = process.env.USER_NAME;  
export const DB_PASSWORD = process.env.SECRET_KEY; 
export const PORT = process.env.PORT || 5000;