import React from "react";
import { useParams } from "react-router-dom";

const Messages = () => {
  const { id } = useParams(); // <-- Hent listing-ID fra URL

  return (
    <div className="messages">
      <h2>Meldinger</h2>

      {/* Viser hvilken listing du prøver å kontakte */}
      <p>Du kontakter selgeren av annonse ID: {id}</p>

      <p>Ingen meldinger enda.</p>
      <p>Kommer i neste update.</p>
    </div>
  );
};

export default Messages;
