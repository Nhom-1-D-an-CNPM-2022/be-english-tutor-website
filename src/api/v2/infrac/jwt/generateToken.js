import jwt from "jsonwebtoken";

const generateToken = (user) => {
  const accessToken = jwt.sign(
      {
        data: {
          _id: user._id.toString(),
          email: user.email,
          isVerified: user.isVerified,
        },
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
  
    const refreshToken = jwt.sign(
      {
        data: {
          _id: user._id.toString(),
          email: user.email,
          isVerified: user.isVerified,
        },
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    return { accessToken, refreshToken };
};

export default generateToken;