const express = require("express");
const router = express.Router();
const multer = require('multer');
const authenticate = require('../middleware/authMiddleware.js');
const {addProperty , uploadImages ,getAllProperty, getAllPropertyImages, getPropertyById, getPropertyImagesById, getSuggestedProperty, addSuggestedPropperty, getSuggestedPropertyImages, getPropertyByType, getMostVisitedProperties, getRecentlyPostedProperties, getPropertyForRent, editProperty, delete_Property, deletePropertyImageById, getPropertyByTypeAndBhk, getPropertyForRentByType, getPropertyForResaleAndType} = require('../controller/PropertyController.js')

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
router.put("/editproperty/:propertyId",authenticate, editProperty);
router.delete("/deleteproperty/:propertyId",authenticate, delete_Property);
router.delete("/delete-property-image/:imageId",authenticate, deletePropertyImageById);
router.post("/upload-images", authenticate, upload.array('images', 20), uploadImages);
router.get("/getAllProperty", getAllProperty);
router.get("/getAllPropertyImages", getAllPropertyImages);
router.get("/getPropertyById/:propertyId", getPropertyById);
router.get("/getPropertyByType/:propertyType", getPropertyByType);
router.get("/getPropertyByTypeAndBhk/:propertyType/:bhk", getPropertyByTypeAndBhk);
router.get("/getPropertyImagesById/:propertyId", getPropertyImagesById);
router.get("/getSuggestedProperty", getSuggestedProperty);
router.get("/getSuggestedPropertyImages", getSuggestedPropertyImages);
router.get("/getMostVisitedProperties", getMostVisitedProperties);
router.get("/getRecentlyPostedProperties", getRecentlyPostedProperties);
router.get("/getPropertyForRent", getPropertyForRent);
router.get("/getPropertyForRentByType/:propertyType", getPropertyForRentByType);
router.get("/getPropertyForResaleByType/:propertyType", getPropertyForResaleAndType);


router.post("/addSuggestedProperty",authenticate,addSuggestedPropperty);






module.exports = router;