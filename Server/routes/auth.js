const express = require("express");
const upload = require('../controller/fileUploadController');


const {Register,Allregister, Login,addBlog, getBlogs, Contact_Us, AllContact} = require('../controller/UserController')

const router = express.Router();



// API endpoint to add a new blog with category and image upload
router.post('/blogs', upload.single('image'), addBlog);


router.get('/blogs', getBlogs);
router.post("/register",Register );
router.get("/",Allregister );
router.post("/login",Login );
router.post("/contact_us",Contact_Us );
router.get("/contact_us/data",AllContact );





module.exports = router;
