const express = require("express");
const router = express.Router();
const multer = require('multer');
const authenticate = require('../middleware/authMiddleware.js');
const {addProperty , uploadImages, addSuggestedPropperty, getAllProperty } = require('../controller/PropertyController.js')

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




router.post("/addproperty", addProperty);
router.post("/upload-images", upload.array('images', 20), uploadImages);

router.post("/addSuggestedProperty",addSuggestedPropperty);
router.get("/getAllProperty", getAllProperty);






module.exports = router;