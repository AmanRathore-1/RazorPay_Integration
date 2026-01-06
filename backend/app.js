import dotenv from 'dotenv';
import express from 'express';
import payment from './routes/productRoutes.js';
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/v1",payment);
export default app;
dotenv.config({ path: "backend/config/config.env" });
