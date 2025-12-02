import React, { useState } from "react";

const AddListing = ({ listings, setListings }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const localImageUrl = URL.createObjectURL(file);
      setImage(localImageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newListing = {
      id: Date.now(), // unik ID
      title,
      description,
      price,
      image: image || "https://via.placeholder.com/150",
      phone,
      email
    };

    setListings([...listings, newListing]);

    // reset
    setTitle("");
    setDescription("");
    setPrice("");
    setImage(null);
    setPhone("");
    setEmail("");
  };

  return (
    <div className="add-listing">
      <h2>Legg ut ny annonse</h2>
      <form onSubmit={handleSubmit}>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Tittel"
          required
        />

        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Beskrivelse"
          required
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Pris (kun tall)"
          required
        />
        

        {/* Telefonnummer */}
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefonnummer"
          required
        />

        {/* E-post */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-post"
          required
        />

        {/* Bildeopplasting */}
        <input 
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />

        {image && (
          <img
            src={image}
            alt="Preview"
            style={{ width: "120px", marginTop: "10px", borderRadius: "5px" }}
          />
        )}

        <button type="submit">Legg ut</button>
      </form>
    </div>
  );
};

export default AddListing;
