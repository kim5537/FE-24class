import "./db";
import "./models/video";
import app from "./server";

console.log(process.cwd());

const PORT = 4000;

const handleListening = () =>
  console.log(`Server Listening on Port http://localhost:${PORT}`);

app.listen(4000, handleListening);
