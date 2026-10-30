import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Create Your Account</h2>
        <p className="text-muted">
          Join our Doctor Appointment System
        </p>
      </div>

      <div className="row justify-content-center g-4">
        {/* Doctor Registration */}
        <div className="col-md-5">
          <div className="card shadow h-100">
            <div className="card-body text-center p-5">
              <div className="display-3 text-primary mb-3">
                <i className="bi bi-hospital"></i>
              </div>

              <h4 className="fw-bold mb-3">
                Are you a Doctor?
              </h4>

              <p className="text-muted">
                Register as a doctor, manage your professional
                profile, share your specialization, and make it
                easier for patients to find you.
              </p>

              <ul className="list-unstyled text-start mb-4">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Create your doctor profile
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Add qualifications and experience
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Manage patient appointments
                </li>
              </ul>

              <Link
                to="/doctor-register"
                className="btn btn-primary w-100"
              >
                Register as Doctor
              </Link>
            </div>
          </div>
        </div>

        {/* Patient Registration */}
        <div className="col-md-5">
          <div className="card shadow h-100">
            <div className="card-body text-center p-5">
              <div className="display-3 text-success mb-3">
                <i className="bi bi-people"></i>
              </div>

              <h4 className="fw-bold mb-3">
                Are you a Patient?
              </h4>

              <p className="text-muted">
                Create an account to find doctors and book
                appointments for yourself or your family members
                from one convenient place.
              </p>

              <ul className="list-unstyled text-start mb-4">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Find doctors by specialization
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Book appointments for family
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  View and manage appointments
                </li>
              </ul>

              <Link
                to="/patient-register"
                className="btn btn-success w-100"
              >
                Register as Patient
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <span className="text-muted">
          Already have an account?
        </span>{" "}
        <Link to="/login" className="text-decoration-none">
          Login here
        </Link>
      </div>
    </div>
  );
}

export default Register;