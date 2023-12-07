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

 

const getPropertyByType = (req, res) =>{

    const propertyType = req.params.propertyType;
    
    const sql = 'SELECT * FROM properties WHERE property_type = ?'; // Replace properties with your actual table name

    db.query(sql,[propertyType] , (err, results) => {
        if (err) {
            console.error('Error fetching properties from MySQL:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            if(results.length > 0){
                res.status(200).json({success:true, data: results, message: `${propertyType} Properties fetched successfully`});
            }
            else{
                res.status(404).json({success:false, error: 'Property not found',message:"Property not found" });
                
            }
            
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

// const getPropertyById = (req, res) => {
//     const propertyId = req.params.propertyId;
//      // Assuming the parameter name in the route is 'propertyId'
//     const sql = 'SELECT * FROM properties WHERE id = ?'; // Replace properties with your actual table name

//     db.query(sql, [propertyId], (err, results) => {
//         if (err) {
//             console.error('Error fetching property from MySQL:', err);
//             res.status(500).json({ error: 'Internal Server Error' });
//         } else {
//             if (results.length > 0) {
//                 res.status(200).json({success:true, data: results[0], message: 'Property fetched successfully' });
//             } else {
//                 res.status(404).json({success:false, error: 'Property not found' , message:"Property not found" });
//             }
//         }
//     });
// }

const getPropertyById = (req, res) => {
    const propertyId = req.params.propertyId;
    const sqlSelect = 'SELECT * FROM properties WHERE id = ?';
    const sqlUpdateVisits = 'UPDATE properties SET visits = visits + 1 WHERE id = ?';

    db.beginTransaction((err) => {
        if (err) {
            console.error('Error starting database transaction:', err);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
            return;
        }

        // Step 1: Fetch property details
        db.query(sqlSelect, [propertyId], (selectErr, results) => {
            if (selectErr) {
                console.error('Error fetching property from MySQL:', selectErr);
                res.status(500).json({ success: false, error: 'Internal Server Error' });
                db.rollback();
            } else {
                if (results.length > 0) {
                    // Step 2: Update visit count
                    db.query(sqlUpdateVisits, [propertyId], (updateErr) => {
                        if (updateErr) {
                            console.error('Error updating property visit count:', updateErr);
                            res.status(500).json({ success: false, error: 'Internal Server Error' });
                            db.rollback();
                        } else {
                            // Commit the transaction
                            db.commit((commitErr) => {
                                if (commitErr) {
                                    console.error('Error committing transaction:', commitErr);
                                    res.status(500).json({ success: false, error: 'Internal Server Error' });
                                    db.rollback();
                                } else {
                                    res.status(200).json({
                                        success: true,
                                        data: results[0],
                                        message: 'Property fetched successfully',
                                    });
                                }
                            });
                        }
                    });
                } else {
                    res.status(404).json({ success: false, error: 'Property not found', message: 'Property not found' });
                    db.rollback();
                }
            }
        });
    });
};


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
                res.status(200).json({success:true, data: results, message: 'Property images fetched successfully' });
            } else {
                res.status(404).json({success:false, error: 'Property not found' ,message:"Property not found" });
            }
        }
    });
}

//method to get suggested property.

const getSuggestedProperty = (req, res) => {
    const sql = 'SELECT * FROM properties WHERE id IN (SELECT property_id FROM suggestions)';
     // Assuming the parameter name in the route is 'propertyId'
    // const sql = 'SELECT * FROM properties_images WHERE property_id = ?';
     // Replace properties with your actual table name

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching property from MySQL:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            if (results.length > 0) {
                res.status(200).json({success:true, data: results, message: 'suggested Property fetched successfully' });
            } else {
                res.status(404).json({success:false, error: 'Property not found' ,message:'Property not found' });
            }
        }
    });
}

// method for suggested property images
const getSuggestedPropertyImages = (req, res) => {
    const sql = 'SELECT * FROM properties_images WHERE property_id IN (SELECT property_id FROM suggestions)';
     // Assuming the parameter name in the route is 'propertyId'
    // const sql = 'SELECT * FROM properties_images WHERE property_id = ?';
     // Replace properties with your actual table name

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching property from MySQL:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            if (results.length > 0) {
                res.status(200).json({ success:true, data: results, message: 'suggested Property fetched successfully' });
            } else {
                res.status(404).json({success:false, error: 'Property not found' ,message:"Property not found" });
            }
        }
    });
}

//method to post suggested property.

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

// method to get most visited property;

const getMostVisitedProperties = (req, res) => {
    const sqlSelectMostVisited = 'SELECT * FROM properties ORDER BY visits DESC LIMIT 20'; // Adjust the LIMIT as needed

    db.query(sqlSelectMostVisited, (error, results) => {
        if (error) {
            console.error('Error fetching most visited properties:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        } else {
            res.status(200).json({
                success: true,
                data: results,
                message: 'Most visited properties fetched successfully',
            });
        }
    });
};

// method to get Recently posted property;

const getRecentlyPostedProperties = (req, res) => {
    const sqlSelectMostVisited = 'SELECT * FROM properties ORDER BY id DESC LIMIT 20'; // Adjust the LIMIT as needed

    db.query(sqlSelectMostVisited, (error, results) => {
        if (error) {
            console.error('Error fetching most visited properties:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        } else {
            res.status(200).json({
                success: true,
                data: results,
                message: 'Most visited properties fetched successfully',
            });
        }
    });
};










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




module.exports = {addProperty , uploadImages, getAllProperty,getAllPropertyImages,getPropertyById ,getPropertyImagesById ,getSuggestedProperty ,addSuggestedPropperty,getSuggestedPropertyImages,getPropertyByType,getMostVisitedProperties,getRecentlyPostedProperties}