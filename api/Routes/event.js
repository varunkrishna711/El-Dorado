const router = require("express").Router();
const Event = require("../Models/Event");

router.post("/addevents", async (req, res) => {
  const newEvent = new Event({
    name: req.body.name,
    organiser: req.body.organiser,
    location: req.body.location,
    isVerified: true,
    price: req.body.price,
    img: req.body.img,
    details: req.body.details,
  });

  try {
    const event = await newEvent.save();
    res.status(200).json(event);
  } catch (err) {
    console.log(err);
  }
});

router.get("/events", async (req, res) => {
  try {
    const allEvent = await Event.find();
    res.status(200).json(allEvent);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
