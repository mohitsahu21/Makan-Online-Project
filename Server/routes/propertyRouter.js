const express = require("express");
const router = express.Router();
const multer = require('multer');
const authenticate = require('../middleware/authMiddleware.js');
const {addProperty , uploadImages ,getAllProperty, getAllPropertyImages, getPropertyById, getPropertyImagesById, getSuggestedProperty, addSuggestedPropperty, getSuggestedPropertyImages, getPropertyByType, getMostVisitedProperties, getRecentlyPostedProperties, getPropertyForRent} = require('../controller/PropertyController.js')

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
router.post("/upload-images", authenticate, upload.array('images', 20), uploadImages);
router.get("/getAllProperty", getAllProperty);
router.get("/getAllPropertyImages", getAllPropertyImages);
router.get("/getPropertyById/:propertyId", getPropertyById);
router.get("/getPropertyByType/:propertyType", getPropertyByType);
router.get("/getPropertyImagesById/:propertyId", getPropertyImagesById);
router.get("/getSuggestedProperty", getSuggestedProperty);
router.get("/getSuggestedPropertyImages", getSuggestedPropertyImages);
router.get("/getMostVisitedProperties", getMostVisitedProperties);
router.get("/getRecentlyPostedProperties", getRecentlyPostedProperties);
router.get("/getPropertyForRent", getPropertyForRent);

router.post("/addSuggestedProperty",addSuggestedPropperty);






module.exports = router;