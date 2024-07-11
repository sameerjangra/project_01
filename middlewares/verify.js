const jwt = require('jsonwebtoken');
const secret = "mysecret";

// const auth = (req, res, next) => {
//   const token = req.header("Authorization")
//   console.log(token);
  
//   if (!token) {
//     return res.status(401).send({ message: 'Authentication required' });
//   }

//   try {
//     const decoded = jwt.verify(token, secret);
//     req.user = decoded;
//     console.log(req.user);
//     next();
//   } catch (error) {
//     res.status(401).send({ message: 'Invalid token' });
//   }
// };

const auth = (req, res, next) => {
  const token = req.header("Authorization")
  console.log(token);
  
  if (!token) {
     return res.status(401).send({ message: 'Authentication required' });
  } 
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    console.log(req.user);
    next();
  } catch (error) {
    res.status(401).send({ message: 'Invalid token' });
  }
};  



module.exports = auth;
