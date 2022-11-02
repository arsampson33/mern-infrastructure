const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')



async function create(req,res) {
  try{
    const user = await User.create(req.body)
    //create JWT token
    const token = createJWT(user)
    res.json(token)
  } catch(error){
    console.log(error)
    res.status(400).json(error)
  }
}

async function login(req,res){
  try{
  const user = await User.findOne({email: req.body.email})
  const match = await bcrypt.compare(req.body.password, user.password)
  if (match){
    const token = createJWT(user)
    res.json(token)
  }
} catch(error){
  res.status(400).json('Bad Credentials');
}
}

function createJWT(user){
    return jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'})
}


module.exports = {
    create,
    login
  };

 