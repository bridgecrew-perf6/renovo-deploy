const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const bcrypt = require("bcrypt");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a todo

app.post("/create-new-account", async (req, res) => {
  try {
    const {  name, email, password, re_pass } = req.body;

const newUser1 = await pool.query("SELECT * FROM users WHERE user_email = $1", [
  email
]);

const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);
    const bcryptRePassword = await bcrypt.hash(re_pass, salt);

if (newUser1.rows.length > 0) {
  return res.status(401).json("User already exists !");
}

else if(bcryptPassword!= bcryptRePassword) {
    return res.status(403).json("Passwords do not match");
}

else{
    let newUser = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password, re_password) VALUES ($1, $2, $3, $4) RETURNING *",
      [ name , email , bcryptPassword, bcryptRePassword]
    );
    res.json(newUser.rows[0]);
    
    }
    

  } catch (err) {
    console.error(err.message);
  }
});



//get all todos

app.post("/", async (req, res) => {
  try {
    const {  email, password } = req.body;
    const loginUser = await pool.query("SELECT * FROM users where user_email = $1", [ email ]);

    if (loginUser.rows.length === 0) {
      return res.status(401).json("Email does not exist");
    }

     const validPassword = await bcrypt.compare(
      password,
      loginUser.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("Invalid Credential");

    } 
    res.json(loginUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});