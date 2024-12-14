
const Todo = require("../models/todo");

//  create


const createTodo = async(req,res) => {
  try {

    const {title , desc} = req.body;
    const newTodo = await Todo.create({
      title,
      desc
    })


    res.status(200).json({
      message : "New todo created successfully",
      newTodo
    })

  } catch (err) {
    console.log( "err " . err);
    res.status(400).json({
      message: "Internal err",
    })
  }
}

// get

const getTodo = async (req,res) => {
  try {

    const todos = await Todo.find({});

    res.status(200).json({
      message : "get All todos",
      todos
    })

  } catch (err) {
    console.log(err);
    res.status(200).json({
      message : "Inernal error"
    })
  }
}


// update



const updateTodo = async(req,res) => {
  try {

    const id = req.params.id;
    const {title ,desc} = req.body;
    const newTodo = await Todo.findByIdAndUpdate({_id : id  ,
      title,
      desc
    },
      {new : true}
      
    )

    res.status(200).json({
      messsage : "Update todo succesfully",
      newTodo
    })

  } catch (err) {

    console.log(err)
    res.status(400).json({
      message : "Internal server error"
    })

  }
}


// delete 

const deleteTodo = async(req,res) => {
  try {

    const id = req.params.id;
    const deletetodo =  await Todo.findByIdAndDelete({_id : id });

    res.status(200).json({
      message :"Delete successfully"
    })

  } catch (err) {
     console,log(err);
     res.status(400).json({
      message : "internal server error"
     })
  }
}


module.exports = {
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo
};