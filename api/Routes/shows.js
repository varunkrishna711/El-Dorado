const router = require("express").Router();
const Show = require("../Models/Shows");

router.get("/shows", async (req, res) => {
  try {
    const show = await Show.find();
    res.status(200).json(show);
  } catch (err) {
    console.log(err);
  }
});

router.post("/shows", async (req, res) => {
  newShow = new Show({
    name: req.body.name,
    imgurl: req.body.imgurl,
  });

  try {
    const show = await newShow.save();
    res.status(200).json(show);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
