const Users = require("./../model/users");
const bcrypt = require("bcrypt");

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({
      statusCode: 401,
      errorMessage: "Oops!!, Check your login details",
    });
  }

  try {
    const findUser = await Users.findOne({ email }).select("+password");
    const isPasswordMatch = await findUser.comparePassword(password)

    if (!isPasswordMatch) {
      res.status(401).json({
        statusCode: 401,
        errorMessage: "Oops!!, Check Your Passord or Name",
      });
    }

    res.status(200).json({
        status: 200,
        message: "Login successfully"
    })
  } catch (error) {
    res.status(500).json({
        statusCode: 500,
        errorMessage: `Oops!!, An Error Occurs😥: ${error.message}`
    })
  }
  next()
};
