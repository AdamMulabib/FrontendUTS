import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const speakers = [
  {
    id: 1,
    name: "Adam",
    desc: "Frontend Developer",
    imageUrl: "https://i.pinimg.com/736x/test.jpg"
  },
  {
    id: 2,
    name: "Mona",
    desc: "UI Designer",
    imageUrl: "https://i.pinimg.com/736x/test2.jpg"
  }
];

app.get("/api/speakers", (req, res) => {
  res.json(speakers);
});

app.listen(3000, () => {
  console.log("Backend jalan di port 3000");
});