var express = require("express");
var router = express.Router();
const User = require("../model/User");

const {
  getAllUsers,
  newUser,
  userByEmail,
  userByName,
  updateUser,
  deleteUser,
  deleteAllUsers,
} = require("../controller/usersController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/all-users", getAllUsers);

router.post("/new-user", newUser);

router.get("/userByEmail/:email", userByEmail);

router.get("/userByName/:name", userByName);

router.put("/update-user/:id", updateUser);

router.delete("/delete-user/:id", deleteUser);

router.delete("/deleteAllUsers", deleteAllUsers);

module.exports = router;
