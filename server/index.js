import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/connectDB.js";
import cookieParser from "cookie-parser";
dotenv.config();
import cors from "cors";
import authRouter from "./src/routes/auth.route.js";
import userRouter from "./src/routes/user.route.js";
import interviewRouter from "./src/routes/interview.route.js";
import paymentRouter from "./src/routes/payment.route.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/interview", interviewRouter);
app.use("/api/payment", paymentRouter);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
