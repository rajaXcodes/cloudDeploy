import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    return res.status(200).json({ message: "Hello from the server v3" });
})
app.get("/health", (req, res) => {
    return res.status(200).json({ message: "Health is fine!!" });
})
app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})