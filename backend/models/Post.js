import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: String,
  desc: String,
});

export default mongoose.model("posts", TodoSchema);
