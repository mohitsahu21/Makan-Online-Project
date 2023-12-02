const express = require("express");
const { db } = require("../db");
const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();


const addProperty = async (req,res) => {
    const formData = req.body;

     // Check if all required fields are present
     const requiredFields = [
    "property_location" ,
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
        const imagePath = 'http://localhost:4000/uploads/' + image.filename; // Store the path relative to the 'uploads' directory

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

//Method to get all property details 

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

 //Method to get all property Images 
const getAllPropertyImages = (req, res) =>{
    const sql = 'SELECT * FROM properties_images'; // Replace properties with your actual table name

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching properties from MySQL:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json({ data: results, message: 'Properties images fetched successfully' });
        }
    });

}

//Method to get one property by Id

const getPropertyById = (req, res) => {
    const propertyId = req.params.propertyId;
     // Assuming the parameter name in the route is 'propertyId'
    const sql = 'SELECT * FROM properties WHERE id = ?'; // Replace properties with your actual table name

    db.query(sql, [propertyId], (err, results) => {
        if (err) {
            console.error('Error fetching property from MySQL:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            if (results.length > 0) {
                res.status(200).json({ data: results[0], message: 'Property fetched successfully' });
            } else {
                res.status(404).json({ error: 'Property not found' });
            }
        }
    });
}

//Method to get one property by Id

const getPropertyImagesById = (req, res) => {
    const propertyId = req.params.propertyId;
     // Assuming the parameter name in the route is 'propertyId'
    const sql = 'SELECT * FROM properties_images WHERE property_id = ?'; // Replace properties with your actual table name

    db.query(sql, [propertyId], (err, results) => {
        if (err) {
            console.error('Error fetching property from MySQL:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            if (results.length > 0) {
                res.status(200).json({ data: results, message: 'Property images fetched successfully' });
            } else {
                res.status(404).json({ error: 'Property not found' });
            }
        }
    });
}






// const addProperty = async (req, res) => {
//     try {
//         const formData = req.body;

//         // Check if all required fields are present
//         const requiredFields = [
//             "property_location",
//             "property_address",
//             "property_city",
//             "property_description",
//             "property_type",
//             "bhk",
//             "new_resale",
//             "structure",
//             "price",
//             "square_ft",
//             "dimension",
//             "car_parking",
//             "year_built",
//             "facing",
//             'furnishing',
//             "carpet_area",
//             "bathroom",
//             'property_on_floor',
//             'flooring',
//             'age_of_property',
//             'parking',
//             'lift'
//         ];
//         const missingFields = requiredFields.filter(field => !formData.hasOwnProperty(field));
//         if (missingFields.length > 0) {
//             return res.status(400).json({ error: `All fields are required` });
//         }

//         // Insert the form data into the MySQL database
//         const sql = 'INSERT INTO properties SET ?'; // Replace your_table_name with the actual table name
//         const [result] = await db.query(sql, formData);

//         const insertedData = { ...formData, id: result.insertId }; // Assuming 'id' is the primary key in your table
//         console.log('Form data inserted successfully');

//         // Send the inserted data back to the frontend
//         res.status(200).json({ data: insertedData, message: 'Form submitted successfully' });
//     } catch (error) {
//         console.error('Error inserting data into MySQL:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };




module.exports = {addProperty , uploadImages, getAllProperty,getAllPropertyImages,getPropertyById ,getPropertyImagesById }