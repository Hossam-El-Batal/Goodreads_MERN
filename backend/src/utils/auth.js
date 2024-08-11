module.exports = (mongose) => {
  const User = require("../models/User.model").default(mongose);

  const register = async (user) => {
    const count = await User.countDocuments({ email: user.email });
    if (count > 0) {
      return {
        status: 409,
        message: "User already registered",
      };
    }
    const newUser = new User(user);
    await newUser.save();
    return {
      status: 201,
      message: "created user successfully",
      data: newUser,
    };
  };

  return {
    register,
  };
};
