const express = require("express");
const { db } = require("../db");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const JWT = require('jsonwebtoken');
const app = express();
const path = require('path');




const dotenv = require("dotenv");
dotenv.config();

const Register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // Validations
    const requiredFields = [name, email, password, phone];

    if (requiredFields.some((field) => !field)) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Hash the "password" and "cpassword"
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    // Check if the user already exists
    const checkUserQuery = "SELECT * FROM registered_data WHERE email = ?";

    db.query(checkUserQuery, [email], (err, result) => {
      if (err) {
        console.error("Error checking if user exists in MySQL:", err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        // Check if there are any rows in the result
        if (result.length > 0) {
          return res.status(400).json({
            error: "User already exists.",
          });
        } else {
          // User not found, proceed with registration
          const insertUserQuery = `
            INSERT INTO registered_data  (
              name, email, phone,password
            ) VALUES (?, ?, ?, ?)
          `;

          const insertUserParams = [name, email, phone, hashedPassword];

          db.query(
            insertUserQuery,
            insertUserParams,
            (insertErr, insertResult) => {
              if (insertErr) {
                console.error("Error inserting user:", insertErr);
                res.status(500).json({ error: "Internal server error" });
              } else {
                console.log("User registered successfully");
                return res.status(200).json({
                  success: true,
                  message: "User registered successfully",
                });
              }
            }
          );
        }
      }
    });
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({
      success: false,
      message: "Error in registration",
      error: error.message,
    });
  }
};

// const Register = (req, res) => {
//   const sql =
//     "INSERT INTO registered_data(`name`, `email`, `phone`, `password`) VALUES (?, ?, ?, ?)";
//   const values = [
//     req.body.name,
//     req.body.email,
//     req.body.phone,
//     req.body.password,
//   ];

//   db.query(sql, values, (err, data) => {
//     if (err) {
//       console.error("Error:", err);
//       return res.json("Error");
//     }

//     return res.json({ data });
//   });
// };
// const saltRounds = 10;
// const hashedPassword = bcrypt.hashSync(password, saltRounds);

// const Allregister = (req, res) => {
//   const sql = "SELECT * FROM registered_data";
//   db.query(sql, (err, data) => {
//     if (err) return res.json("Error");
//     return res.json({ data });
//   });
// };

// module.exports = { Register, Allregister };

// const Register = async (req, res) => {
//   try {
//     const { name, email, phone, password } = req.body;

//     // Validations
//     const requiredFields = [name, email, password, phone];

//     if (requiredFields.some((field) => !field)) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     // Hash the "password" and "cpassword"
//     const saltRounds = 10;
//     const hashedPassword = bcrypt.hashSync(password, saltRounds);

//     // Check if the user already exists
//     const checkUserQuery = "SELECT * FROM registered_data WHERE email = ?";

//     db.query(checkUserQuery, [email], (err, result) => {
//       if (err) {
//         console.error("Error checking if user exists in MySQL:", err);
//         res.status(500).json({ error: "Internal server error" });
//       } else {
//         // Check if there are any rows in the result
//         if (result.length > 0) {
//           return res.status(400).json({
//             error: "User already exists.",
//           });
//         } else {
//           // User not found, proceed with registration
//           const insertUserQuery = `
//             INSERT INTO registered_data (
//               name, email, phone,password
//             ) VALUES (?, ?, ?, ?)
//           `;

//           const insertUserParams = [name, email, phone, hashedPassword];

//           db.query( insertUserQuery,insertUserParams,(insertErr, insertResult) => {
//               if (insertErr) {
//                 console.error("Error inserting user:", insertErr);
//                 res.status(500).json({ error: "Internal server error" });
//               } else {
//                 console.log("User registered successfully");
//                 return res.status(200).json({
//                   success: true,
//                   message: "User registered successfully",
//                 });
//               }
//             }
//           );
//         }
//       }
//     });
//   } catch (error) {
//     console.error("Error in registration:", error);
//     res.status(500).json({
//       success: false,
//       message: "Error in registration",
//       error: error.message,
//     });
//   }
// };

// const Register = async (req, res) => {
//   try {
//     const { name, email, phone, password } = req.body;

//     // Validate required fields
//     if (!name || !email || !phone || !password) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     // Hash the password
//     const saltRounds = 10;
//     const hashedPassword = bcrypt.hashSync(password, saltRounds);

//     // Check if the user already exists
//     const checkUserQuery = "SELECT * FROM registered_data WHERE email = ?";

//     db.query(checkUserQuery, [email], (err, result) => {
//       if (err) {
//         console.error("Error checking if user exists in MySQL:", err);
//         return res.status(500).json({ error: "Internal server error" });
//       }

//       // Check if user already exists
//       if (result.length > 0) {
//         return res.status(400).json({ error: "User already exists." });
//       }

//       // User not found, proceed with registration
//       const insertUserQuery = `
//         INSERT INTO registered_data (name, email, phone, password)
//         VALUES (?, ?, ?, ?)
//       `;

//       const insertUserParams = [name, email, phone, hashedPassword];

//       db.query(insertUserQuery, insertUserParams, (insertErr) => {
//         if (insertErr) {
//           console.error("Error inserting user:", insertErr);
//           return res.status(500).json({ error: "Internal server error" });
//         }

//         console.log("User registered successfully");
//         return res.status(200).json({
//           success: true,
//           message: "User registered successfully",
//         });
//       });
//     });
//   } catch (error) {
//     console.error("Error in registration:", error);
//     res.status(500).json({
//       success: false,
//       message: "Error in registration",
//       error: error.message,
//     });
//   }
// };

const Allregister = (req, res) => {
    const sql = "SELECT * FROM registered_data";
    db.query(sql, (err, data) => {
      if (err) return res.json("Error");
      return res.json({ data });
    });
  };

  const Login = async (req, res) => {
    try {
       const {email, password} = req.body

       //Validation 
       if(!email || !password){
        return res.status(404).send({
          success: false,
          message: "Invaild email or password ",
        });
       }
       // check user in mysql 
       const checkUserQuery = "SELECT * FROM registered_data WHERE email =?";
       db.query(checkUserQuery,[email],async(err,results)=>{
        if(err){
          console.log("Error checking  user in mysql",err);
        }
        if(results.length===0){
          return console.log("email is not  registerd")
        }
        const user = results[0];

        //compare  passwords
        const match = await bcrypt.compare(password,user.password);
        if(!match){
          return console.log("Invaild password")
        }
       
       //generate  token 
       const token = await JWT.sign({id: user.id}, process.env.JWT_SECRET,{ expiresIn: "7d"});

       res.status(200).send({
        success: true,
        message : "Login sucessfully",
        user:{
          id: user.id,
          name:user.name,
          email:user.email,
          phone:user.phone,
        },
        token,
       });
      });
      }

    catch (error) {
    console.log(error);
    res.status(500).send({success:false , message:"error in login ", error})
    }
  };


  

  // const addBlog = (req, res) => {
  //   const { title, content, category } = req.body;
  //   const image = req.file ? req.file.filename : null;
  
  //   const serverDomain = 'http://localhost:9000'; // Adjust the port number as needed
  //   const ImageUrl = `${serverDomain}/${image}`;
  
  //   const sql = 'INSERT INTO blogs (title, content, category, image) VALUES (?, ?, ?, ?)';
  //   const values = [title, content, category, ImageUrl ];
  
  //   db.query(sql, values, (err, result) => {
  //     if (err) {
  //       console.error('Error saving blog:', err);
  //       return res.status(500).send('Error saving blog');
  //     }
  
  //     console.log('Blog saved successfully:', result);
  //     res.status(201).json({ message: 'Blog saved successfully', imagePath });
  //   });
  // };
  


  // const addBlog = (req, res) => {
  //   const { title, content, category } = req.body;
  //   const image = req.file ? req.file.filename : null;
  
  //   const serverDomain = 'http://localhost:9000'; // Adjust the port number as needed
  //   const imageUrl = image ? `${serverDomain}/${image}` : null;
  
  //   const sql = 'INSERT INTO blogs (title, content, category, image) VALUES (?, ?, ?, ?)';
  //   const values = [title, content, category, imageUrl];
  
  //   db.query(sql, values, (err, result) => {
  //     if (err) {
  //       console.error('Error saving blog:', err);
  //       return res.status(500).send('Error saving blog');
  //     }
  
  //     console.log('Blog saved successfully:', result);
  //     res.status(201).json({ message: 'Blog saved successfully', imageUrl });
  //   });
  // };
// Assuming 'uploads' is the directory where your images are stored
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



const addBlog = (req, res) => {
  const { title, content, category } = req.body;
  const image = req.file ? req.file.filename : null;

  const serverDomain = 'http://localhost:9000'; // Adjust the port number as needed
  const imageUrl = image ? `${serverDomain}/uploads/${image}` : null;

  const sql = 'INSERT INTO blogs (title, content, category, image) VALUES (?, ?, ?, ?)';
  const values = [title, content, category, imageUrl];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error saving blog:', err);
      return res.status(500).send('Error saving blog');
    }

    console.log('Blog saved successfully:', result);
    res.status(201).json({ message: 'Blog saved successfully', imageUrl });
  });
};
  
  
  const getBlogs = (req, res) => {
    const sql = 'SELECT * FROM blogs'; // Replace with your actual query
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).send('Error fetching blogs');
      } else {
        res.status(200).json(result);
      }
    });
  };

  
const Contact_Us = (req,res)=>{
 try{
  const { name, email, phone, message } = req.body;
 // Validations
 const requiredFields = [name, email,  phone , message];

 if (requiredFields.some((field) => !field)) {
   return res.status(400).json({ error: "All fields are required" });
 }
 const insertUserQuery = `
            INSERT INTO contact_us (
              name, email, phone,message
            ) VALUES (?, ?, ?, ?)
          `;
          db.query(
            insertUserQuery,
            requiredFields,

            (insertErr, insertResult) => {
              if (insertErr) {
                console.error("Error inserting user:", insertErr);
                res.status(500).json({ error: "Internal server error" });
              } else {
                console.log("User registered successfully");
                return res.status(200).json({
                  success: true,
                  message: "User registered successfully",
                });
              }
            }
          );

 } catch (error) {
  console.error("Error in registration:", error);
  res.status(500).json({
    success: false,
    message: "Error in registration",
    error: error.message,
  });
}

};
const AllContact = (req, res) => {
  const sql = "SELECT * FROM contact_us";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json({ data });
  });
};
  

module.exports = {Register,Allregister,Login,addBlog,getBlogs,Contact_Us,AllContact}
