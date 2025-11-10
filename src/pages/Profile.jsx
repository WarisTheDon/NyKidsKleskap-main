import React from "react";
import Card from "../components/Card";

const Profile = ({ listings }) => {
  const user = JSON.parse(localStorage.getItem("user")); // ← henter user fra browser

  if (!user) {
    return <p>Du er ikke logget inn</p>;
  }

  function logout() {
    localStorage.removeItem("user");
    window.location.href = "/"; // send tilbake til home
  }

  return (
    <div className="profile">
      <h2>Min profil</h2>

      <p><strong>Brukernavn:</strong> {user.name}</p>
      <p><strong>Epost:</strong> {user.email}</p>

      <button onClick={logout}>Logg ut</button>

      <hr style={{margin: "20px 0"}} />

      <p>Dine annonser:</p>
      <div className="cards-container">
        {listings.length === 0 && <p>Du har ingen annonser enda.</p>}
        {listings.map((listing) => (
          <Card key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
