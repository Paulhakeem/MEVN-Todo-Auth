const Todo = require("./../model/todo");

// Add Todo
exports.createTodo = async (req, res, next) => {
  const { name } = req.body;

  try {
    if (!name) {
      return res.status(400).json({
        statusCode: 400,
        message: "Check your input field",
      });
    }

    const newTodo = await Todo.create(req.body);
    if (newTodo) {
      res.status(201).json({
        statusCode: 201,
        message: "New todo created!!",
        newTodo,
      });
    }
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Ooops!!, Something went wrong",
    });
  }

  next();
};

exports.getTodo = async (req, res, next) => {
  const response = await Todo.find();
  try {
    if (!response) {
      return res.status(404).json({
        statusCode: 404,
        message: "Something went wrong!",
      });
    }
    res.status(200).json({
      statusCode: 200,
      response,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Server error!"
    })
  }
  next()
};

// Delete Todo
exports.deleteTodo = async (req, res, next) => {
  const id = req.params.id;

  try {
    const checkTodo = await Todo.findByIdAndDelete(id);
    if (!checkTodo) {
      res.status(404).json({
        statusCode: 404,
        message: "Todo Not Found!",
      });
    }

    res.status(200).json({
      statusCode: 200,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      statusCode: 404,
      message: "Todo id not found!",
    });
  }
  next();
};
