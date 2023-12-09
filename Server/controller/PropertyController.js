const express = require("express");
const { db } = require("../db");
const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();


const addProperty = async (req,res) => {
    const formData = req.body;

     // Check if all required fields are present
     const requiredFields = [
    
     "property_address",
       "property_city", 
       "property_description" ,
        "property_type",
       "bhk" ,
        "new_resale",
        "structure",
        "price" ,
       "square_ft" ,
       "dimension" ,
        "car_parking" ,
        "year_built" ,
        "facing" ,
        'furnishing' ,
        "carpet_area" ,
        "bathroom" ,
        'property_on_floor' ,
        'flooring' ,
       'age_of_property',
        'parking' ,
        'lift'];
     const missingFields = requiredFields.filter(field => !formData.hasOwnProperty(field));
     if (missingFields.length > 0) {
        return res.status(400).json({ error: `All fields are require` });
    }

    // Insert the form data into the MySQL database
    const sql = 'INSERT INTO properties SET ?'; // Replace your_table_name with the actual table name
    db.query(sql, formData, (err, result) => {
        if (err) {
            console.error('Error inserting data into MySQL:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            const insertedData = { ...formData, id: result.insertId };
            console.log('Form data inserted successfully');
            res.status(200).json({ data:insertedData, message: 'Form submitted successfully' });
        }
    });
}


const uploadImages =  (req, res) => {
    // Get propertyid from request body or parameters
    const {property_id} = req.body;

      // If property_id is not received, send a response
      if (!property_id) {
        return res.status(400).json({ success: false, message: "Property ID is required" });
    }

    // Access the array of uploaded files from req.files
    const images = req.files;

     // If no images are selected, send a response
     if (!images || images.length === 0) {
        return res.status(400).json({ success: false, message: "No images selected" });
    }

    // Use a counter to track the number of successful database inserts
    let successfulInserts = 0;

    // Process each image and save its path to the database
    images.forEach((image, index, array) => {
        const imagePath = 'http://localhost:9000/uploads/' + image.filename; // Store the path relative to the 'uploads' directory

        // Insert the image path into the database
        db.query(
            'INSERT INTO properties_images (property_id	, image) VALUES (?, ?)',
            [property_id, imagePath],
            (err, results) => {
                if (err) {
                    console.error('Error saving image path to the database:', err);
                    res.status(400).json({success:false, message:err})
                } else {
                    console.log('Image path saved to the database!');
                    successfulInserts++;

                      // If all images have been processed, send a success response
                      if (successfulInserts === array.length) {
                        res.status(200).json({ success: true, message:"images saved successfully" });
                    }
                }
            }
        );
    });

};
const addSuggestedPropperty = (req, res) => {
    const { property_id } = req.body;
   
  
    if (!property_id) {
      return res.status(400).json({success: false, error: 'Missing required fields' , message:"Property Id required" });
    }

       // Check if the property_id already exists
  const selectQuery = 'SELECT * FROM suggestions WHERE property_id = ?';
  const selectValues = [property_id];

  db.query(selectQuery, selectValues, (selectErr, selectResults) => {
    if (selectErr) {
      console.error('Error checking property_id:', selectErr);
      return res.status(500).json({ success: false, error: 'Internal Server Error', message: 'Internal Server Error' });
    }

    if (selectResults.length > 0) {
      // The property_id already exists in the database
      return res.status(409).json({ success: false, error: 'Conflict', message: 'Property ID already exists' });
    }

  
    const insertQuery = 'INSERT INTO suggestions ( property_id) VALUES (?)';
    const values = [ property_id];
  
    db.query(insertQuery, values, (err, result) => {
      if (err) {
        console.error('Error inserting property:', err);
        return res.status(500).json({success: false, error: 'Internal Server Error',message:'Internal Server Error' });
      }
  
      console.log('Suggested Property inserted successfully');
      res.json({ success: true, property_id: result.insertId , message : "Suggested property added successfully" });
    });
});
  };

  const getAllProperty = (req, res) =>{
    const sql = 'SELECT * FROM properties'; // Replace properties with your actual table name

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching properties from MySQL:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json({ data: results, message: 'Properties fetched successfully' });
        }
    });

}




module.exports = {addProperty , uploadImages,addSuggestedPropperty,getAllProperty}