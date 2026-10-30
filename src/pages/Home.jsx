
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold text-primary fs-4">
            <i className="bi bi-heart-pulse-fill me-2"></i>
            MediCare
          </Link>

          <div className="ms-auto">
            <Link to="/" className="btn btn-outline-primary me-2">
              Home
            </Link>
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(120deg, #eaf5ff, #ffffff)",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-5 py-3">
            <div className="col-lg-6">
              <p className="text-primary fw-bold">
                YOUR HEALTH, OUR PRIORITY
              </p>

              <h1 className="display-4 fw-bold text-dark">
                Book Appointments with Trusted Doctors
              </h1>

              <p className="lead text-secondary my-4">
                Connect with experienced doctors, book appointments,
                and manage your healthcare in one place.
              </p>

              <Link to="/login" className="btn btn-primary btn-lg px-4">
                <i className="bi bi-calendar-check me-2"></i>
                Get Started
              </Link>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900"
                alt="Doctor"
                className="img-fluid rounded-4 shadow"
                style={{
                  maxHeight: "420px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Choose MediCare?</h2>
          <p className="text-secondary">
            Healthcare made simple, convenient, and secure.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <i className="bi bi-calendar-check text-primary fs-1"></i>
              <h5 className="fw-bold mt-3">Easy Booking</h5>
              <p className="text-secondary mb-0">
                Schedule appointments with your preferred doctors easily.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <i className="bi bi-person-badge text-primary fs-1"></i>
              <h5 className="fw-bold mt-3">Expert Doctors</h5>
              <p className="text-secondary mb-0">
                Consult experienced healthcare professionals.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <i className="bi bi-shield-check text-primary fs-1"></i>
              <h5 className="fw-bold mt-3">Secure & Private</h5>
              <p className="text-secondary mb-0">
                Keep your personal health information protected.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <i className="bi bi-clock text-primary fs-1"></i>
              <h5 className="fw-bold mt-3">Convenient Access</h5>
              <p className="text-secondary mb-0">
                Manage your appointments anytime from one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container pb-5">
        <div className="bg-light rounded-4 text-center p-5">
          <h2 className="fw-bold">Ready to Get Started?</h2>
          <p className="text-secondary">
            Login to access your personalized dashboard.
          </p>

          <Link to="/login" className="btn btn-primary btn-lg px-5">
            Login
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3">
        <p className="mb-0">
          © {new Date().getFullYear()} MediCare | Doctor Appointment System
        </p>
      </footer>
    </div>
  );
}

export default Home;
