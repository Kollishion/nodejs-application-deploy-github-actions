import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get("/", (_, res) => {
  return res.json({ msg: "hello" });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});
