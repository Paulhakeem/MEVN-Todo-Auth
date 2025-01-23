const Todo = require("./../model/todo");


// Add Todo
exports.createTodo = async (req, res, next) => {
  const { todo } = req.body;

  try {
    if (!todo) {
      return res.status(400).json({
        statusCode: 400,
        message: "Check your input field",
      });
    }

    const newTodo = await Todo.create(req.body);
    if(newTodo){
        res.status(201).json({
            statusCode: 201,
            message: 'New todo created!!'
        })
    }
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Ooops!!, Something went wrong",
    });
  }

  next();
};


// Delete Todo
exports.deleteTodo = async(req,res,next)=> {
    const {id} = req.params.id
}