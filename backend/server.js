import dotenv from "dotenv";
import Razorpay from "razorpay";
import app from "./app.js";
dotenv.config({ path: "backend/config/config.env" });

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEy,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

const port = process.env.PORT || 9000;



app.listen(port, () => {
  console.log(`Server is working on ${port}`);
});
