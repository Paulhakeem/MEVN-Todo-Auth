const Users = require("../model/users");
const jwtToken = require('jsonwebtoken')


//jwt token
const userToken = (id)=> {
  return jwtToken.sign({id}, process.env.SECRET_TOKEN, {
    expiresIn: 24 * 60 * 60 * 1000,
  })
}


// creating cookie
const sendResponse = (user, statusCode, res)=> {
  const token = userToken(user._id)
  const options = {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true
  }
  if((process.env.NODE_ENV = "production")) {
    options.secure = true
  }
  user.password = undefined
}

exports.createUser = async (req, res, next) => {
  const { email, password } = req.body;

  //   CHECKING INPUT INFO
  if (!email || !password) {
    res.status(403).json({
      statusCode: 401,
      errorMessage: "Opps!, check your name or password😢",
    });
  }

  try {
    // CHECK IF USER EXIST
    const checkUser = await Users.findOne({ email });
    if (checkUser) {
      return res.status(403).json({
        statusCode: 403,
        errorMessage: "Email exist💀, Please login to your account!",
      });
    }

    // CREATE NEW USER
    const newUser = await Users.create(req.body);
    if (newUser) {
      res.status(201).json({
        statusCode: 201,
        res: newUser,
      });
    }
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      errorMessage: error.message,
    });
  }
  next();
};
