import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Logo from "./images/RODYC Secondary Logo - Orange Background.png"; 
import communityImg from "./images/community.png.png";

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  

  // List of advertisement images


  // Change ads every 5 seconds

  return (
    <div className="homepage">
      {/* Overlay + Content */}

      <div className="content">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo-container">
            <img src={Logo} alt="RODYC Logo" className="logo-img" />
            <h1 className="logo">RODYC</h1>
          </div>
          
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Explore</a>
            <a href="#">Offers</a>
            <button className="sign-in" onClick={() => setShowLogin(true)}>
              Sign In
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="hero-section">
          <h2>
            Discover the Best <span>Shops & Deals</span> in Your City
          </h2>
          <p>
            Find local shops, restaurants, and businesses with reviews, offers,
            and discounts all in one place.
          </p>

          {/* Search Bar */}
          <div className="search-bar">
            <input type="text" placeholder="Search for shops, restaurants, etc" />
            <input type="text" placeholder="Your city or location" />
            <button>Search</button>
          </div>

          {/* Stats Section */}
          <div className="stats">
            <div>
              <h3>1000+</h3>
              <p>Local Shops</p>
            </div>
            <div>
              <h3>5000+</h3>
              <p>Reviews</p>
            </div>
            <div>
              <h3>300+</h3>
              <p>Active Offers</p>
            </div>
          </div>
        </div>

        {/* Explore Local Shops Section */}
        <div className="explore">
          <div className="explore-intro">
            <h2>Explore Local Shops</h2>
            <p>
              Discover the best local businesses in your area with ratings,
              reviews, and exclusive offers.
            </p>
          </div>

          {/* Category Filters */}
          <div className="categories">
            {[
              "All",
              "Grocery",
              "Restaurants",
              "Electronics",
              "Clothing",
              "Cafes",
              "Mobile",
              "Home Goods",
              "Other"
            ].map((category, index) => (
              <button key={index}>{category}</button>
            ))}
          </div>

          {/* Shop Cards */}
<div className="cards">
  {[
    {
      name: "Green Valley Grocery",
      location: "123 Main St, Downtown",
      initials: "GG",
      color: "green",
      image: "https://loremflickr.com/600/400/grocery,store?lock=1"
    },
    {
      name: "Taste of Italy",
      location: "456 Park Ave, Midtown",
      initials: "TI",
      color: "yellow",
      image: "https://loremflickr.com/600/400/italian,restaurant?lock=2"
    },
    {
      name: "TechWorld",
      location: "789 Tech Blvd, East Side",
      initials: "TE",
      color: "orange",
      image: "https://loremflickr.com/600/400/electronics,store?lock=3"
    },
    {
      name: "Fashion Forward",
      location: "101 Style St, Fashion District",
      initials: "FF",
      color: "blue",
      image: "https://loremflickr.com/600/400/fashion,boutique?lock=4"
    }
  ].map((shop, idx) => (
    <div key={idx} className="card">
      <img
        src={shop.image}
        alt={shop.name}
        width="600"
        height="400"
        loading="lazy"x
        onError={(e) => {
          // Fallback if any image ever fails
          e.currentTarget.src = `https://picsum.photos/seed/${shop.initials}/600/400`;
        }}
      />
      <div className="card-content">
        <h3>{shop.name}</h3>
        <p>{shop.location}</p>
        <span className={`tag ${shop.color}`}>{shop.initials}</span>
      </div>
    </div>
  ))}
</div>




        </div>

        {/* Join Our Community Section */}
{/* Join Our Community Section */}
<section className="join-section">
  <h2 className="join-title">JOIN OUR COMMUNITY</h2>
  <p className="join-description">

  </p>
  <button className="join-btn">Get Started</button>

</section>


  {/* Illustration */}
  <div className="community-illustration">
    <img src={communityImg} alt="Join our community" />

  </div>
</div>
      <div>
        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div>
              <h3>RODYC</h3>
              <p>
                Find the best local businesses with reviews, offers, and
                discounts all in one place.
              </p>
            </div>
            <div>
              <h4>Explore</h4>
              <ul>
                <li><a href="#">Shops</a></li>
                <li><a href="#">Restaurants</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Offers</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4>For Business</h4>
              <ul>
                <li><a href="#">Add Your Business</a></li>
                <li><a href="#">Business Dashboard</a></li>
                <li><a href="#">Advertise</a></li>
                <li><a href="#">Analytics</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 RODYC. All rights reserved.</span>
            <span>Built with ❤️</span>
          </div>
        </footer>
      </div>

          {/* Login Modal */}
      {showLogin && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)}>
          <div
            className="login-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setShowLogin(false)}
            >
              ✕
            </button>
            <h2>Welcome Back 👋</h2>
            <p>Login to continue exploring shops & deals</p>
            <form className="login-form">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
            <p className="signup-text">
              Don’t have an account? <a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
