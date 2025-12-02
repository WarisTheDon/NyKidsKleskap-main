import Register from "./pages/Register";
import Login from "./pages/Login"; 
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AddListing from "./pages/AddListing";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import ListingPage from "./pages/ListingPage";

// IMPORTERTE BILDENE DINE
import skate from "./assets/skate.png";
import nerf from "./assets/nerf.png";

function App() {
  const [listings, setListings] = useState([
    { 
      id: 1, 
      title: "Skateboard", 
      description: "Kult skateboard for barn. Pent brukt!", 
      price: "300", 
      image: skate 
    },
    { 
      id: 2, 
      title: "Nerf Blaster", 
      description: "Helt ny Nerf gun, kjempegøy for barn!", 
      price: "200", 
      image: nerf 
    }
  ]);

  return (
    <Router>
      <div className="page-container">   {/* <-- SUPER VIKTIG WRAPPER, hjelper i henhold til css styling av hele siden uten den så blir det vanskeligere */}

        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home listings={listings} />} />

            <Route 
              path="/add" 
              element={<AddListing listings={listings} setListings={setListings} />} 
            />

            <Route path="/messages" element={<Messages />} />
            
            <Route 
              path="/profile" 
              element={<Profile listings={listings} />} 
            />

            <Route 
              path="/listing/:id" 
              element={<ListingPage listings={listings} />} 
            />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
