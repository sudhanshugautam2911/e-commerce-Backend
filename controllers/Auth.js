const { User } = require("../models/User");

exports.createUser = async (req, res) => {
  const user = new User(req.body);

  try {
    const doc = await user.save();
    res.status(201).json({doc});
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    // TODO: this is temporary , we will use strong password auth
    if (!user) {
      res.status(401).json({ message: 'No User with this email found'});
    }
    else if (user.password === req.body.password) {
      // TODO: we will be address independent of login
      res.status(201).json({
        id: user.id, email: user.email, name: user.name, addresses: user.addresses
      });
    } else {
      res.status(401).json({
        message: "Invalid Credentials !"
      })
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
