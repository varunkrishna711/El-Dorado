router.get("/all", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
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
