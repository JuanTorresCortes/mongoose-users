const mongoose = require("mongoose");
const { v4: uuid } = require("uuid")
 

const todoSchema = new mongoose.Schema({
 
_id: { type: String , default: () => uuid() },
 
title: { type: String, required: true },
 
description: { type: String , required: true},
 
priority: {type: String,  
    enum: ['low', 'medium', 'high'],  
    default: 'medium' 
},
 
completed: {type: Boolean, default: false},
 
createAt: { type: Date, default: Date.now}
})
 

// mongoose.model("collection Name", schema)
const Todo = mongoose.model("Todos", todoSchema)
module.exports = Todo;