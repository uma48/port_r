import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './App.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Umasankar Dash</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container-fluid">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <header className="text-center text-white py-5 mt-5" style={{ backgroundColor: '#0D6EFD' }}>
        <h1 className="display-3">Umasankar Dash</h1>
        <p className="lead mb-4">A Passionate Web Developer Specializing in Modern Web Technologies</p>
        <button className="btn btn-light btn-lg">View My Work</button>
      </header>

      {/* About Me Section */}
      <section className="text-center text-dark py-5" id="about" style={{ backgroundColor: '#f8f9fa' }}>
        <h2 className="text-uppercase mb-3" style={{ color: '#0D6EFD' }}>About Me</h2>
        <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
          I'm a passionate web developer focused on creating dynamic, user-friendly web applications using React, Node.js, Express, and other modern technologies. My goal is to build high-quality, scalable applications that solve real-world problems.
        </p>
      </section>

      {/* Services Section */}
      <section className="text-center py-5" id="services" style={{ backgroundColor: '#E9ECEF' }}>
        <h2 className="text-uppercase mb-5" style={{ color: '#0D6EFD' }}>My Services</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow border-0">
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#198754' }}>Web Development</h5>
                <p className="card-text">
                  Building responsive, fast, and scalable websites tailored to your needs using the latest technologies like React, HTML5, CSS3, and JavaScript.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow border-0">
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#fd7e14' }}>UI/UX Design</h5>
                <p className="card-text">
                  Creating clean, intuitive, and aesthetically pleasing designs with a focus on the user experience and interaction.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow border-0">
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#17a2b8' }}>Consultation</h5>
                <p className="card-text">
                  Offering expert advice on web development best practices, technology stack selection, and project planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center text-white bg-primary py-5" id="contact">
        <h2 className="text-uppercase mb-4" style={{ color: '#f8f9fa' }}>Contact Me</h2>
        <p className="lead">I would love to hear from you! Feel free to get in touch for any inquiries or collaboration opportunities.</p>
        <button onClick={() => setCount(count + 1)} className="btn btn-light mb-3">
          I have {count} messages
        </button>
        <br />
        <a href="mailto:umasankar@example.com" className="btn btn-light">Email Me</a>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-4" style={{ backgroundColor: '#343a40' }}>
        <p className="text-white mb-0">© 2025 Umasankar Dash. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
