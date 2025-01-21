const env = require("dotenv");
const Users = require("../model/users");
const jwt = require("jsonwebtoken");

env.config("./config.env");

exports.getUserToken = async (req, res, next) => {
  const userToken = req.headers.authorization;
  if (userToken) {
    const userJWT = userToken.split("")[1];

    try {
      const promisifyToken = jwt.verify(userJWT, process.env.SECRET_TOKEN);
      const userExist = await Users.findById(promisifyToken.id);

      if (userExist) {
        return res.status(200).json({
          statusCode: 200,
          userExist,
        });
      }
    } catch (error) {
      res.status(404).json({
        statusCode: 404,
        message: "User not foun",
      });
    }
  }
  next();
};
