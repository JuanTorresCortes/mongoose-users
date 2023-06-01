const express = require("express");
const router = express.Router();
const User = require("../model/Todo");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// router.get("/all-users", async (req, res) => {
//   try {
//     const allUsers = await User.find({});
//     res.status(200).json({ success: true, data: allUsers });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, massage: error.massage });
//   }
// });

// router.post("/new-user", async (req, res) => {
//   try {
//     const { name, email, password, phone } = req.body;
//     const user = {
//       name: name,
//       email: email,
//       password: password,
//       phone: phone,
//     };
//     const newUser = await new User(user); // calls user model
//     const saveUser = await newUser.save();
//     res.status(200).json({ success: true, data: saveUser });
//   } catch (error) {
//     res.status(500).json({ success: false, massage: error.message });
//   }
// });

// router.get("/userByEmail/:email", async (req, res) => {
//   try {
//     const targetEmail = req.params.email;
//     const targetUser = await User.findOne({ email: targetEmail });
//     if (!targetUser) {
//       return res
//         .status(400)
//         .json({ success: false, message: "User not found" });
//     }
//     res.status(200).json({ success: true, data: targetUser });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, massage: error.massage });
//   }
// });

// router.get("/userByName/:name", async (req, res) => {
//   // http://localhost:3000/users/userByName/giana
//   try {
//     const targetName = req.params.name;
//     const targetUser = await User.find({ name: targetName });
//     if (!targetName) {
//       return res
//         .status(400)
//         .json({ success: false, message: "User not found" });
//     }
//     res.status(200).json({ success: true, data: targetUser });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, massage: error.massage });
//   }
// });

// router.get("/userByName", async (req, res) => {
//   // http://localhost:3000/users/userByName?name=giana
//   try {
//     const targetName = req.query.name;
//     const targetUser = await User.find({ name: targetName }); // or ({ name: { $regex: new RegExp(name, "i") }});

//     if (!targetUser) {
//       return res
//         .status(400)
//         .json({ success: false, message: "User not found" });
//     }
//     res.status(200).json({ success: true, data: targetUser });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// router.put("/update-user/:id", async (req, res) => {
//   // http://localhost:3000/users/update-user/853e0770-8c89-47a5-b890-504cfef67c3c
//   try{
//     const updateUser = await User.findByIdAndUpdate(
//       { _id: req.params.id},
//       req.body 
//     );

//     if(!updateUser) {
//       return res.status(400).json({ success: false, message: "User not found" })
//     }

//     res.status(200).json({success: true, data: updateUser});
//   }catch (error) {
//     res.status(500).json({ success: false, message: error.massage})
//   }
// })

// router.delete("/delete-user/:id", async (req, res) => {
//   // http://localhost:3000/users/delete-user/853e0770-8c89-47a5-b890-504cfef67c3c
//   try{
//     const targetID = req.params.id;
//     const deleteUser = await User.findByIdAndDelete ({ _id: targetID });
//     if(!deleteUser) {
//       return res.status(400).json({ success: false, message: "User not found" })
//     }
//     res.status(200).json({ success: true, data: deleteUser });
//   }catch (error) {
//     res.status(500).json({ success: false, message: error.massage })
//   }
// })

module.exports = router;