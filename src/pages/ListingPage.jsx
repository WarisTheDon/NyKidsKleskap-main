import React from "react";
import { useParams } from "react-router-dom";

const ListingPage = ({ listings }) => {
  const { id } = useParams();

  const listing = listings.find((item) => String(item.id) === String(id));

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

      {/* Kontaktinfo */}
      <div style={{ marginTop: "30px", fontSize: "18px" }}>
        <h3>Kontakt selger</h3>
        <p><strong>Telefon:</strong> {listing.phone}</p>
        <p><strong>E-post:</strong> {listing.email}</p>
      </div>
    </div>
  );
};

export default ListingPage;
