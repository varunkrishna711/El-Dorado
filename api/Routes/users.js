const router = require("express").Router();
const User = require("../Models/User");
const Teacher = require("../Models/Teacher");

router.get("/all/users", async (req, res) => {
  try {
    const user = await User.find();
    !user && res.status(401).json("User not found");

    // const accessToken = jwt.sign(
    //   { id: user._id, isAdmin: user.isAdmin },
    //   process.env.JWT_TOKEN,
    //   { expiresIn: "10d" }
    // );

    // const { password, ...info } = user._doc;

    // res.status(200).json({ ...info, accessToken });

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

router.get("/all/teachers", async (req, res) => {
  try {
    const user = await Teacher.find();
    !user && res.status(401).json("User not found");

    // const accessToken = jwt.sign(
    //   { id: user._id, isAdmin: user.isAdmin },
    //   process.env.JWT_TOKEN,
    //   { expiresIn: "10d" }
    // );

    // const { password, ...info } = user._doc;

    // res.status(200).json({ ...info, accessToken });

    res.status(200).json(user._doc);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
