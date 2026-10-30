
import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const stats = [
    {
      title: "Total Doctors",
      count: 24,
      icon: "bi-person-badge",
      color: "primary",
    },
    {
      title: "Total Patients",
      count: 350,
      icon: "bi-people",
      color: "success",
    },
    {
      title: "Appointments",
      count: 128,
      icon: "bi-calendar-check",
      color: "warning",
    },
    {
      title: "Pending Appointments",
      count: 18,
      icon: "bi-clock-history",
      color: "danger",
    },
  ];

  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Admin Dashboard</h2>
          <p className="text-muted mb-0">
            Manage your doctor appointment system
          </p>
        </div>

        <button className="btn btn-outline-danger">
          <i className="bi bi-box-arrow-right me-2"></i>
          Logout
        </button>
      </div>

      {/* Statistics */}
      <div className="row g-4 mb-4">
        {stats.map((item) => (
          <div className="col-sm-6 col-xl-3" key={item.title}>
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body d-flex align-items-center">
                <div
                  className={`bg-${item.color}-subtle text-${item.color} rounded p-3 me-3`}
                >
                  <i className={`bi ${item.icon} fs-3`}></i>
                </div>

                <div>
                  <p className="text-muted mb-1">{item.title}</p>
                  <h3 className="fw-bold mb-0">{item.count}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Management Options */}
      <div className="row g-4">
        <div className="col-md-6 col-xl-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <i className="bi bi-person-badge text-primary fs-1"></i>
              <h5 className="mt-3">Manage Doctors</h5>
              <p className="text-muted">
                Add new doctors and view doctor records.
              </p>
              <Link to="/doctors" className="btn btn-primary">
                Manage Doctors
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <i className="bi bi-calendar-check text-success fs-1"></i>
              <h5 className="mt-3">Manage Appointments</h5>
              <p className="text-muted">
                View and manage patient appointments.
              </p>
              <Link to="/appointments" className="btn btn-success">
                View Appointments
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <i className="bi bi-people text-warning fs-1"></i>
              <h5 className="mt-3">Manage Patients</h5>
              <p className="text-muted">
                View registered patients.
              </p>
              <Link to="/patients" className="btn btn-warning">
                View Patients
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Appointments */}
      <div className="card border-0 shadow-sm mt-4">
        <div className="card-header bg-white py-3">
          <h5 className="mb-0">Recent Appointments</h5>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Rahul Sharma</td>
                  <td>Dr. Amit Patel</td>
                  <td>29 Oct 2026</td>
                  <td>
                    <span className="badge bg-success">Confirmed</span>
                  </td>
                </tr>

                <tr>
                  <td>Priya Desai</td>
                  <td>Dr. Neha Shah</td>
                  <td>30 Oct 2026</td>
                  <td>
                    <span className="badge bg-warning text-dark">
                      Pending
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>Rohan Mehta</td>
                  <td>Dr. Amit Patel</td>
                  <td>31 Oct 2026</td>
                  <td>
                    <span className="badge bg-success">Confirmed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
