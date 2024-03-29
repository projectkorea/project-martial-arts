import dotenv from "dotenv";
import "./db";
import app from "./app";
import "./models/MartialArtsResult";

dotenv.config();

const PORT = process.env.PORT;

const handleListening = () => console.log(`✅Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
