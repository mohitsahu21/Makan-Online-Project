const express = require("express");
const router = express.Router();
const multer = require('multer');
const authenticate = require('../middleware/authMiddleware.js');
const {addProperty , uploadImages} = require('../controller/PropertyController.js')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const imageFileName = Date.now() + '-' + file.originalname;
        cb(null, imageFileName);
    },
});
const upload = multer({ storage: storage });




router.post("/addproperty",authenticate, addProperty);
router.post("/upload-images", authenticate, upload.array('images', 10), uploadImages);




module.exports = router;