const router = require("express").Router();
const User = require("../Models/User");
const Teacher = require("../Models/Teacher");
const CryptoJS = require("crypto-js");
const Course = require("../Models/Course");

router.post("/register", async (req, res) => {
  let newUser, newCourse;
  if (req.body.isTeacher) {
    newUser = new Teacher({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.HASH_KEY
      ).toString(),
      phnumber: req.body.phnumber,
      age: req.body.age,
      address: req.body.address,
      gender: req.body.gender,
      isAdmin: req.body.isAdmin,
      courses: req.body.courses,
      students: req.body.students,
    });
    newCourse = new Course({
      name: req.body.course,
      details: req.body.desciption,
      teacher: req.body.username,
      location: req.body.address,
      address: req.body.address,
      isVerified: true,
      img: req.body.img,
      // id:req.body.phnumber
    });
  } else {
    newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.HASH_KEY
      ).toString(),
      phnumber: req.body.phnumber,
      isAdmin: req.body.isAdmin,
      courses: req.body.courses,
      bookings: req.body.bookings,
    });
  }

  try {
    const user = await newUser.save();
    const course = await newCourse.save();
    console.log(user);
    console.log(course);
    res.status(200).json(course );
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    let user;
    if (req.body.isTeacher)
      user = await Teacher.findOne({ email: req.body.email });
    else user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("User not found");

    let bytes = CryptoJS.AES.decrypt(user.password, process.env.HASH_KEY);
    let originalpass = bytes.toString(CryptoJS.enc.Utf8);

    originalpass !== req.body.password &&
      res.status(401).json("Incorrect password");

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
