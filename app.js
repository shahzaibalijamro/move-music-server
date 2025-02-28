import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: 'https://mov-music-frontend.vercel.app',
    credentials: true,
}));
export {app}
