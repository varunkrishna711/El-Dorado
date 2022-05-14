const router = require("express").Router();
const Course = require("../Models/Course");

router.get("/courses", async (req, res) => {
  try {
    const allEvent = await Course.find();
    res.status(200).json(allEvent);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
