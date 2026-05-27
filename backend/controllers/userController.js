const client = require("../data/pg");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const { uuidv7 } = require("uuidv7");
const uuid = uuidv7();


//create user
const signupUser = async (req, res) => {
  const { email, password, fullName } = req.body;
  
  // validate fields
  if(!email || !password || !fullName) {
    return res.status(404).json({error: "Fill in all fields"});
  }
  
  if(!validator.isEmail(email)) {
    return res.status(404).json({error: "Enter a valid email"});
  }
  
  if(!validator.isStrongPassword(password)) {
    return res.status(404).json({error: "Enter a strong password"});
  }
  
  try {
  // check if user exists
  const exists = await client.query("SELECT * FROM users WHERE email = $1", [email]);
  if(exists.rows.length > 0) {
    res.status(404).json({error: "email is already registered, try another"});
  }
  // hash password if not
  if(exists.rows.length === 0){
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // create new user
    // const newUser = await client.query("INSERT INTO users (id, email, password, username, full_name, avatar_url, bio, res_id, is_verified, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)", []);
    const newUser = await client.query("INSERT INTO users (id, email, password, full_name) VALUES ($1, $2, $3, $4)", [uuid, email, hashedPassword, fullName]);
    res.status(200).json({email});
    }
  } catch (error) {
    res.status(404).json({error: error.message});
  }
}

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  // validate fields
  if(!email || !password) {
    return res.status(404).json({error: "Fill in all fields"});
  }
  
  if(!validator.isEmail(email)) {
    return res.status(404).json({error: "Enter a valid email"});
  }
  
  try {
    const user = await client.query("SELECT * FROM users WHERE email = $1", [email]);
    //show error if user does not exist
    if(user.rows.length === 0){
      res.status(404).json({error: "user does not exist"});
    }
    //check password match if user exists
    if(user.rows.length === 0){
      console.log(user.rows[0].password);
      //const passwordMatch = await bcrypt.compare(user.rows[0].password);
      if(!passwordMatch){
        res.status(404).json({error: "Incorrect password, enter carefully!"});
      }
      if(passwordMatch){
      res.status(200).json({email});
      }
    }
    
  } catch(error) {
    res.status(404).json({error: "Could not log you in, try again later"});
  }
}

//delete user
const deleteUser = async (req, res) => {
  const {id, email} = req.body;
  try{
    const user = await client.query("DELETE * FROM users WHERE email = $1", [email]);
  } catch (error) {
    res.status(404).json({error: "Account could not be deleted, try again later"});
  }
}

const updateUser = async (req, res) => {
  
}

module.exports = { signupUser, loginUser,
deleteUser, updateUser }