<<<<<<< HEAD
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Allow frontend requests
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  })
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));
=======
import express from 'express';
const app = express();

// app.get('/', (req, res) => {
//   res.send('Server is ready!');
// });

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            question: 'Why did the scarecrow win an award?',
            answer: 'Because he was outstanding in his field.'
        },
        {
            id: 2,
            question: 'How do you organize a space party?',
            answer: 'You planet.'
        },
        {
            id: 3,
            question: 'Why did the math book look sad?',
            answer: 'Because it had too many problems.'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    }
);
>>>>>>> a88c31a (Frontend and admin panel complete)
