const Users = require("../model/users");

exports.createUser = async (req, res, next) => {
  const { name, password } = req.body;

  //   CHECKING INPUT INFO
  if (!name || !password) {
    return res.status(403).json({
      statusCode: 401,
      errorMessage: "Opps!, check your name or password😢",
    });
  }

  try {
    // CHECK IF USER EXIST
    const checkUser = await Users.findOne({ name });
    if (checkUser) {
      return res.status(403).json({
        statusCode: 403,
        errorMessage: "User name exist💀, Please login to your account!",
      });
    }

    // CREATE NEW USER
    const newUser = await Users.create(req.body);
    if (newUser) {
        res.status(201).json({
            statusCode: 201,
            res: newUser
        })
    }
  } catch (error) {
    res.status(500).json({
        statusCode: 500,
        errorMessage: error.message
    })
  }
};
