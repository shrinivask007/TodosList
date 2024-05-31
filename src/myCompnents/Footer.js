import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#343a40', color: 'white', width: '100%',  position: 'sticky', top:"100vh"}} className="text-center">
      <div style={{ padding: '1rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <section>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button" style={{ borderColor: 'white', color: 'white' }}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button" style={{ borderColor: 'white', color: 'white' }}>
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button" style={{ borderColor: 'white', color: 'white' }}>
            <i className="fab fa-instagram"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button" style={{ borderColor: 'white', color: 'white' }}>
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button" style={{ borderColor: 'white', color: 'white' }}>
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>
      <div style={{ padding: '0.5rem 0', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className="text-white" href="https://mytodosList.com/">  mytodosList.com  </a>
        by Shrinivas Kathare
      </div>
    </footer>
  );
}

export default Footer;
