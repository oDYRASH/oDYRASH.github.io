import { axios } from 'axios';


export function summitPostForm(){

        const fileInput = document.getElementById('imageInput');
        const file = fileInput.files[0];
    
        if (!file) {
            alert('Please select an image file.');
            return;
        }
    
        const formData = new FormData();
        formData.append('file', file);
    
        fetch('http://127.0.0.1:5000/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            // Check the content type of the response
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();  // Parse JSON if the response is JSON
            } else {
                return response.text();  // Otherwise, treat it as plain text
            }
        })
        .then(data => {
            console.log(data);
            alert('Image uploaded successfully. Check the console for details.');
        })
        .catch(error => {
            console.error('Error uploading image:', error);
            alert('Error uploading image. Check the console for details.');
        });
   
    
 
}