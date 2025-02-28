import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: 'https://move-music-client.vercel.app',
    credentials: true,
}));
export {app}