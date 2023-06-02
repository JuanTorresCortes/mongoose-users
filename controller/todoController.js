// client's request ->(server) apps.js -> router -> model -> controller -> client response

const Todo = require('../model/Todo')

const getAllTodos = async (req, res) => {
    // http://localhost:3000/todos/all-todos
    try {
        const todos = await Todo.find({});
        res.status(200).json({ success: true, data: todos })
    } catch (error) {
        res.status(500).json({ success: false, massage: error.massage });
    }
}

const createTodo = async (req, res) => {
    // http://localhost:3000/todos/new-todo
    try {
        const newTodo = await new Todo(req.body);
        const saveTodo = await newTodo.save();
        res.status(200).json({ success: true, data: saveTodo});
    } catch (error) {
        res.status(500).json({ success: false, massage: error.massage })
    }
}

const getTodosByPriority = async (req,res) => {
    // http://localhost:3000/todos/todo-by-priority/> type of priority gos here <
    try {
        const todos = await Todo.find({ priority: req.params.priority})
        if(todos.length === 0 ) return res.status(200).json({ success: false, message: "no todo with this priority "})
        res.status(200).json({success: true, data: todos})
    } catch (error) {
        res.status(500).json({ success: false, massage: error.massage })
    }
}

const editTodo = async (req, res) => {
    // http://localhost:3000/todos/editTodo/ > id gos here <
    try {
        const todo = await Todo.findByIdAndUpdate({ _id: req.params.id}, req.body)
        if(!todo) {
            return res.status(200).json({success: false, message: "todo not found" });
        }
        res.status(200).json({ success: true, data: todo})
    } catch (error) {
        res.status(500).json({ success: false, massage: error.massage })
    }
}

const deleteTodo = async (req, res) => {
    // http://localhost:3000/todos/deleteTodo/ > id gos here <
    try {
        const todo = await Todo.findByIdAndDelete({_id: req.params.id});
        if (!todo) {
            res.status(200).json({success: false, message: "todo was not found"})
        }
        res.status(200).json({success: true, data: todo})
    } catch (error) {
        res.status(500).json({ success: false, massage: error.massage })
    }
}

const deleteAll = async (req, res) => {
    // http://localhost:3000/todos/deleteAllTodo
    try {
      // Delete all todos
      const result = await Todo.deleteMany();
  
      if (result.deletedCount === 0) {
        res.status(400).json({ success: false, message: "todo list is empty" });
      } else {
        res.status(200).json({ success: true, message: "All todos deleted successfully" });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  

module.exports = {
    getAllTodos,
    createTodo,
    getTodosByPriority,
    editTodo,
    deleteTodo,
    deleteAll,
};