import React, { useState, useEffect } from "react";
import "./SpecialOffers.css";
import Container from "react-bootstrap/Container";
import SpecialOffersCard from "./SpecialOffersCard";
import axios from "axios";

function SpecialOffers() {
  const [specialOfferItems, setSpecialOfferItems] = useState([]);

  useEffect(() => {
    fetchFeedbackDetails();
  }, []);

  const fetchFeedbackDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8095/feedback/feedbackDetails`);
      setSpecialOfferItems(response.data);
      console.log("API response:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="special-offers my-4 my-sm-5">
      <Container>
        <h2 className="text-uppercase fw-semibold mb-4 mb-sm-5">
          Customer Reviews
        </h2>
        <div className="row g-4">
          {specialOfferItems.map((feedback) => (
            <SpecialOffersCard
              key={feedback.feedbackId}
              rating={feedback.rating}
              feedbackImage={feedback.feedbackImage}
              customerName={feedback.customerName}
              comment={feedback.comment}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default SpecialOffers;
