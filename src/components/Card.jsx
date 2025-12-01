import React from "react";
import { Link } from "react-router-dom";
import "../styles/app.css";

const Card = ({ id, title, description, price, image }) => {
  return (
    <div className="card">
      <img 
        src={image} 
        alt={title} 
        className="card-image"
        style={{ 
          width: "140px",
          height: "140px",
          objectFit: "cover",
          borderRadius: "8px" 
        }}
      />

      <h3>{title}</h3>
      <p>{description}</p>
      <p className="price">{price} kr</p>

      {/* View Listing Button */}
      <Link to={`/listing/${id}`}>
        <button 
          style={{
            marginTop: "10px",
            padding: "8px 12px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          View
        </button>
      </Link>
    </div>
  );
};

export default Card;
