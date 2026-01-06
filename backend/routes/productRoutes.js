import express from "express";
import {
    getKey,
    paymentVerification,
    processPayment
} from "../controllers/productController.js";

const router = express.Router();

router.post("/payment/process", processPayment);
router.get("/getKey", getKey);
router.post("/paymentVerification", paymentVerification); // ✅ ADD THIS

export default router;
