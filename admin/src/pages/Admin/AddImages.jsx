import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import cogoToast from 'cogo-toast';
import styled from "styled-components";

function AddImages() {
    const [selectedFiles, setSelectedFiles] = useState(null);
    const [property, setProperty] = useState('');
  const { propertyId } = useParams();
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAxMTU1MzA3LCJleHAiOjE3MDE3NjAxMDd9.jbB4JVJZaSEap0MeBFwdvIid_GE6t6VcG2ahcTxJvpU"
  console.log(propertyId)

  useEffect(() => {
    // Set the property ID from query parameters when the component mounts
    setProperty(propertyId);
  }, [propertyId]);

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      if (!property) {
        throw new Error('Property ID is required');
      }
      if(!selectedFiles){
        throw new Error('Images is required');
      }
  
      const formData = new FormData();
  
      // Append each selected file to the FormData object
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append('images', selectedFiles[i]);
      }
  
      // Append the property ID to the FormData object
      formData.append('property_id', property);
  
      const response = await axios.post('http://localhost:4000/api/property/upload-images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        },
      });

      console.log('Upload successful:', response.data);
      cogoToast.success(`${response.data.message}`);

      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error('Error uploading images:', error);
      cogoToast.error(`Error uploading images: ${error.response.data.message}`);
      // Handle error (e.g., show an error message to the user)
    }
  };

    
  return (
    <>
    <Container>
          <div className='container '>
              <div className="row text-center mt-4 mb-4">
                  <div className="col-12">
                      <h2>Add Property Images</h2>

                  </div>
              </div>
              <div className="row d-flex justify-content-center mb-5">
                  <div className="col-6">
                      <form onSubmit={handleSubmit} >
                      <div className="mb-3">
                <label htmlFor="propertyId" className="form-label">Property ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="propertyId"
                  value={propertyId}
                  readOnly // Make the input read-only since it's derived from the URL
                />
              </div>

                          <div class="mb-3">
                              <label for="formFileMultiple" class="form-label">Select the images for Property</label>
                              <input class="form-control" type="file" id="formFileMultiple" multiple  onChange={handleFileChange} accept="image/png, image/gif, image/jpeg"/>
                          </div>
                          <div className='text-center'>
                          <button type="submit" class="btn btn-primary">Submit</button>
                          </div>
                      </form>

                  </div>
              </div>

          </div>
          </Container>
    </>
  )
}

export default AddImages

const Container = styled.div`

.container{
   padding: 20px;
}


`