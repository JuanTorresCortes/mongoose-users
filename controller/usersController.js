const Users = require("../model/User");
const User = require("../model/User");

const getAllUsers = async (req, res) => {
  // http://localhost:3000/users/all-users
  try {
    const allUsers = await User.find({});
    res.status(200).json({ success: true, data: allUsers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, massage: error.massage });
  }
};

const newUser = async (req, res) => {
  // http://localhost:3000/users/new-user
  try {
    const { name, email, password, phone } = req.body;
    const user = {
      name: name,
      email: email,
      password: password,
      phone: phone,
    };
    const newUser = await new User(user); // calls user model
    const saveUser = await newUser.save();
    res.status(200).json({ success: true, data: saveUser });
  } catch (error) {
    res.status(500).json({ success: false, massage: error.message });
  }
};

const userByEmail = async (req, res) => {
  // http://localhost:3000/users/userByEmail/> User email <
  try {
    const targetEmail = req.params.email;
    const targetUser = await User.findOne({ email: targetEmail });
    if (!targetUser) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: targetUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, massage: error.massage });
  }
};

const userByName = async (req, res) => {
  // http://localhost:3000/users/userByName/> User name <
  try {
    const targetName = req.params.name;
    const targetUser = await User.find({ name: targetName });
    if (!targetName) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: targetUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, massage: error.massage });
  }
};

const updateUser = async (req, res) => {
  // http://localhost:3000/users/update-user/> User ID <
  try {
    const updateUser = await User.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );

    if (!updateUser) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, data: updateUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.massage });
  }
};

const deleteUser = async (req, res) => {
  // http://localhost:3000/users/delete-user/> User ID <
  try {
    const targetID = req.params.id;
    const deleteUser = await User.findByIdAndDelete({ _id: targetID });
    if (!deleteUser) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: deleteUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.massage });
  }
};

const deleteAllUsers = async (req, res) => {
  // http://localhost:3000/users/deleteAllUsers
  try {
    // Delete all users
    const result = await User.deleteMany();

    if (result.deletedCount === 0) {
      res.status(400).json({ success: false, message: "todo list is empty" });
    } else {
      res
        .status(200)
        .json({
          success: true,
          message: "All Users have been deleted successfully",
        });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllUsers,
  newUser,
  userByEmail,
  userByName,
  updateUser,
  deleteUser,
  deleteAllUsers,
};
