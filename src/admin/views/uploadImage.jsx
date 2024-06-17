import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UploadImage.css"; // Import CSS file for styling


const ImageUploadDownload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [allImages, setAllImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile && allImages.length < 6) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("shopId", 2); // Dynamically append shopId
      formData.append("imageName", selectedFile.name); // Optionally append imageName
  
      try {
        const response = await axios.post(
          "http://localhost:8095/feedback/addfeedback",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        alert("Image uploaded successfully");
        handleViewAllImages(); // Refresh the list of images
      } catch (error) {
        console.error("Error uploading the image:", error);
        alert("Failed to upload image");
      }
    } else {
      alert("Please select a file to upload or you have reached the maximum limit of 6 images");
    }
  };
  

  const handleDownload = async () => {
    if (selectedImage) {
        try {
            const response = await axios.get(
                `http://localhost:8096/api/images/${selectedImage.id}/download`,
                {
                    responseType: "blob"
                }
            );
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', selectedImage.name); // Use the correct filename
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error("Error downloading the image:", error);
            alert("Failed to download image");
        }
    } else {
        alert("Please select an image to download");
    }
  };

  const handleDeleteImage = async () => {
    if (selectedImage) {
      try {
        await axios.delete(`http://localhost:8095/shop/images/delete/${selectedImage.id}`);
        alert("Image deleted successfully");
        handleViewAllImages(); // Refresh the list of images
      } catch (error) {
        console.error("Error deleting the image:", error);
        alert("Failed to delete image");
      }
    } else {
      alert("Please select an image to delete");
    }
  };

  const handleViewAllImages = async () => {
    try {
      const response = await axios.get("http://localhost:8095/shop/images/images");
      setAllImages(response.data);
    } catch (error) {
      console.error("Error fetching all images:", error);
      alert("Failed to fetch all images");
    }
  };

  useEffect(() => {
    handleViewAllImages();
    const intervalId = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % 6); // Update to 6 photos
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Image Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      <h2>Image Download</h2>
      <button onClick={handleDownload}>Download Selected Image</button>

      <h2>Delete Image</h2>
      <button onClick={handleDeleteImage}>Delete Selected Image</button>

      <h2>All Images (3x2 Grid)</h2>
      <div className="image-grid">
        {allImages.map((img) => (
          <div
            key={img.id}
            onClick={() => setSelectedImage(img)}
            className={`image-card ${selectedImage?.id === img.id ? "selected" : ""}`}
          >
            <img
              src={`data:image/jpeg;base64,${img.data}`}
              alt={`image_${img.id}`}
            />
          </div>
        ))}
      </div>

      <h2>Slideshow (Auto-rotating)</h2>
      <div className="slideshow-container">
        {allImages.slice(0, 6).map((img, index) => ( // Slice to only include first 6 images
          <div
            key={img.id}
            className={`slide ${index === currentSlideIndex ? "active" : ""}`}
          >
            <img
              src={`data:image/jpeg;base64,${img.data}`}
              alt={`image_${img.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploadDownload;
