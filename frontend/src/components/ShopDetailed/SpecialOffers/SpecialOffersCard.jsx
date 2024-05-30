import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function SpecialOffersCard(props) {

    
        // const backgroundImageStyle = {
        //   backgroundImage: `url(${props.feedbackImage})`,
        // };

  return (
    <div className="col-lg-6">
      <Card className="shadow d-flex flex-sm-row h-100 overflow-hidden">
      <div className="img-div img-hover col-sm-6" >
          {/* <img src={props.feedbackImage} alt="Feedback" /> */}
          <img
              src={`data:image/jpeg;base64,${props.feedbackImage}`}
              alt={`image_${props.feedbackId}`}
            />
        </div>
        <div className="col-sm-6">
          <Card.Body className="p-4">
            <Card.Title className="text-start text-uppercase fw-bold">
              {props.customerName}
            </Card.Title>
            <ul className="list-unstyled">
            <li className="text-start">{props.rating}</li>
              <li className="text-start">{props.comment}</li>
              
              <li className="text-start">
               
               
              </li>
            </ul>
            <Button variant="dark">View Now</Button>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}

export default SpecialOffersCard;
