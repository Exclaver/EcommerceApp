import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>welcome to mern stack</h1>");
});
//PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`'server running on ${PORT}'`);
});
