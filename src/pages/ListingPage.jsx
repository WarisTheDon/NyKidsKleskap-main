import React from "react";
import { useParams } from "react-router-dom";

const ListingPage = ({ listings }) => {
  const { id } = useParams();

  // Finn annonsen fra props
  const listing = listings.find((item) => item.id === parseInt(id));

  if (!listing) {
    return <p>Annonsen finnes ikke.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{listing.title}</h2>

      <img 
        src={listing.image} 
        alt={listing.title}
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "10px",
          marginBottom: "20px"
        }}
      />

      <h3>Pris: {listing.price} kr</h3>

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        {listing.description}
      </p>
    </div>
  );
};

export default ListingPage;
