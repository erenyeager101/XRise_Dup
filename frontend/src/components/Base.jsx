import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/styles.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Link, useLocation } from 'react-router-dom';

function Base() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY <= 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div>
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-primary shadow-lg ${showNavbar ? 'sticky-top' : 'navbar-hidden'}`}
        style={{
          transition: 'transform 0.3s ease-in-out',
          transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
          height: '70px',
        }}
      >
        <div className="container">
          <Link to="/" className="navbar-brand fs-4">
            <i className="bi bi-stars me-2"></i>XRise
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {[
                { path: '/', label: 'Home', icon: 'bi-house' },
                { path: '#about', label: 'About', icon: 'bi-info-circle' },
                { path: '#services', label: 'Services', icon: 'bi-gear' },
                { path: '/parentdashboard', label: 'Parentdashboard', icon: 'bi-people' },
                { path: '/login', label: 'Login', icon: 'bi-box-arrow-in-right' },
                { path: '/signup', label: 'Signup', icon: 'bi-person-plus' },
                { path: '/profile', label: 'Profile', icon: 'bi-person-circle' },
              ].map((navItem) => (
                <li className="nav-item" key={navItem.path}>
                  <a
                    href={navItem.path}
                    className={`nav-link ${location.pathname === navItem.path
                      ? 'active bg-light text-primary rounded px-3'
                      : ''}`}
                  >
                    <i className={`bi ${navItem.icon} me-2`}></i>
                    {navItem.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home"
        className="hero-section"
        style={{
          display: 'grid',
          placeItems: 'center',
          height: '98vh',
          width: '100%',
          background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://media.assettype.com/healthday-en%2F2024-08-07%2Fy192dmdh%2FAdobeStock_420956842.jpeg) no-repeat center center/cover',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <div>
          <h1 className="display-4 dynamic-header">Welcome to XRise</h1>
          <p className="lead dynamic-header">Empowering lives through innovative VR/AR technology.</p>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="container my-5">
        <h2 className="text-center mb-4">Features of XRise</h2>
        <div className="features-grid">
          <div className="feature-list">
            <ul>
              <li>Dual VR/AR capabilities</li>
              <li>Adaptive AI-driven learning</li>
              <li>Parental and therapist portal</li>
              <li>User assessment reports</li>
            </ul>
          </div>
          <div className="feature-image">
            <img
              src="https://st3.depositphotos.com/1092019/12815/i/450/depositphotos_128158612-stock-photo-features-on-small-chalkboard-3d.jpg"
              alt="Features of XRise"
              className="img-fluid"
              style={{height:'40vh',width:'80vh'}}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container my-5">
        <h2 className="text-center mb-4">About XRise</h2>
        <div className="about-grid">
          <div className="about-image">
            <img
              src="https://cubicleninjas.com/wp-content/uploads/2017/12/howdoes360videowork.jpg"
              alt="About XRise"
              className="img-fluid"
              style={{height:'40vh',width:'80vh'}}
            />
          </div>
          <div className="about-text">
            <p>
              XRise is a platform designed for children and teenagers with Autism Spectrum Disorder (ASD) and Intellectual Disabilities (ID), focusing on the development and improvement of social and behavioral skills.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container my-5">
        <h2 className="text-center mb-4">Our Offerings</h2>
        <div className="services-grid">
          {[
            {
              title: 'Customized Learning',
              text: 'Adaptive lessons powered by AI for personalized development.',
              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkUFmp5jSF-DhrD5102bzHU7RbidetfqYfA&s',
            },
            {
              title: 'Parent & Therapist Portal',
              text: 'Track progress and collaborate for better outcomes.',
              img: 'https://assets.clevelandclinic.org/transform/b199f3bf-2223-4276-b471-1973ef13ae91/child-therapy-and-parents-1256276099-770x533-1_jpg',
            },
            {
              title: 'Progress Reports',
              text: 'Detailed user assessments to monitor improvement.',
              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT5ewmsUiYP8h0deX-yzo47MpJfZlcOctWFQ&s',
            },
          ].map((offering, idx) => (
            <div key={idx} className="card">
              <img src={offering.img} alt={offering.title} />
              <h5>{offering.title}</h5>
              <p>{offering.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Base;
