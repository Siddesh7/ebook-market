const express = require("express");
const Model = require("../model/model");

const router = express.Router();

router.post("/post", async (req, res) => {
  const data = new Model({
    name: req.body.name,
    author: req.body.author,
    description: req.body.description,
    coverImg: req.body.coverImg,
    pdfUri: req.body.document,
    price: req.body.price,
    creator: req.body.creator,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/get", async (req, res) => {
  const name = req.query.name;
  const author = req.query.author;
  try {
    const data = await Model.findOne({
      name: name,
      author: author,
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
