import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import PostModel from "./models/Post.js";
const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb://127.0.0.1:27017/coderconect", {})
  .then(console.log("connected to mongodb!!!"))
  .catch((err) => console.log(err, "DB Error!"));

app.post("/add", (req, res) => {
  const title = req.body.title;
  const desc = req.body.desc;
  PostModel.create({
    title: title,
    desc: desc,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err, "Can't post data!"));
});

app.get("/get", (req, res) => {
  PostModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err, "Can't fetch data!"));
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  PostModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err, "Can't delete data!"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
