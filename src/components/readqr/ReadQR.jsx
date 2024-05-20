import { Scanner } from '@yudiel/react-qr-scanner';
import React, { useState } from 'react';
import axios from 'axios';

const ReadQR = () => {
  const [ifError, setIfError] = useState(false);

  // Callback function when QR code is successfully scanned
  const handleScanResult = (text, result) => {

    handlePostRequest(result.text)
    // Assuming 'result' contains the scanned data (e.g., ticket ID)
    // You can customize this logic based on your specific use case
    //setScannedData(result);
  };

  // Function to handle the POST request
  const handlePostRequest = async (id) => {
    try {
      console.log(id)
      const endpoint = `/ticket/scan/${id}`
      PostMethod1(endpoint)
      window.location.href = `/?readed=true`;
      // Make a POST request to your server endpoint
    } catch (error) {
      console.log(error);
    }
  };

  const api = axios.create({
    baseURL: 'http://localhost:8080', // Replace with your API base URL
  });

  async function PostMethod1(endpoint) {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found. Please authenticate first.');
        return null;
      }
      // Set the Authorization header
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // Make the request using POST method
      const response = await api.post(endpoint);
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error
    }
  }

  return (
    <>
      {!ifError ? <h2 style={{ color: 'white' }}>Scanning...</h2>:
      <h2>Ticket not found, please try again.</h2>
      }
      <div style={{maxHeight:'400px', maxWidth:'400px'}}>
        <Scanner
        
          onResult={handleScanResult}
          onError={(error) => setIfError(true)}
        />
      </div>
    </>
  );
};

export default ReadQR;
