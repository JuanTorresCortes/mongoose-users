const express = require("express");
const router = express.Router();
const Todo = require("../model/Todo");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/all-to-dos", async (req, res) => {
  // http://localhost:3000/todos/all-to-dos
  try {
    const allToDos = await Todo.find({});
    res.status(200).json({ success: true, data: allToDos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, massage: error.massage });
  }
});

router.post("/new-todo", async (req, res) => {
  // http://localhost:3000/todos/new-todo
  try {

    const { title, description } = req.body;
    const todo = {
      title: title,
      description: description,
    };

    const newTodo = await new Todo(todo); // calls user model
    const saveTodo = await newTodo.save();
    res.status(200).json({ success: true, data: saveTodo });
  } catch (error) {
    res.status(500).json({ success: false, massage: error.message });
  }
});

router.get("/todoById/:id", async (req, res) => {
  // http://localhost:3000/todos/todoByID/ad35358f-8fe6-4555-aa6a-fc8014a283df
  try {
    const targetID = req.params.id;
    const targetTodo = await Todo.findById({ _id: targetID });
    if (!targetTodo) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: targetTodo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, massage: error.massage });
  }
});

router.get("/todoByTitle/:title", async (req, res) => {
  // http://localhost:3000/todos/todoByTitle/pick up the milk
  try {
    const targetTitle = req.params.title;
    const targetTodo = await Todo.find({ title: targetTitle });
    if (!targetTodo) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: targetTodo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, massage: error.massage });
  }
});

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