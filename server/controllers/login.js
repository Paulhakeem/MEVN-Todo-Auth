const Users = require("./../model/users");
const bcrypt = require("bcrypt");

exports.loginUser = async (req, res, next) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(401).json({
      statusCode: 401,
      errorMessage: "Oops!!, Check your login details",
    });
  }

  try {
    const res = await Users.findOne({ name }).select("+password");
    const isPasswordMatch = await bcrypt.checkPassword(password, res.password);

    if (!res || !isPasswordMatch) {
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
