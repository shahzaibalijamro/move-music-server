import CryptoJS from "crypto-js";

// Postman Pre-request Script
const generateAuthHeader = () => {
    // Get your access token from previous request or environment variables
    const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM5OTY5NDg2LCJpYXQiOjE3Mzk5NjIyODYsImp0aSI6Ijc4M2RmNDk4OGQ2YTQ2NWJhNDFhNjQ0MWIyOTViMjIwIiwidXNlcl9pZCI6MjU5fQ.MIUHzqjVe6aj9X6w2SQVFqUZCMqNkCK9K2mZFHFg5yU";

    // Create the string to sign (modify as needed for your API requirements)
    const stringToSign = `${accessToken}`;

    // Generate HMAC-SHA256 signature
    const signature = CryptoJS.HmacSHA256(stringToSign, "your_secret_key").toString(CryptoJS.enc.Base64);

    console.log(`HMAC-SHA256 ${signature}`);


    // Set the authorization header with proper format
    pm.request.headers.add({
        key: "Authorization",
        value: `HMAC-SHA256 ${signature}`
    });
};

// Execute the function
generateAuthHeader();