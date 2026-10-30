
import React from "react";

function DoctorDashboard() {
  const appointments = [
    {
      id: 1,
      patient: "Rahul Sharma",
      date: "29 Oct 2026",
      time: "10:00 AM",
      reason: "Regular Checkup",
      status: "Confirmed",
    },
    {
      id: 2,
      patient: "Priya Desai",
      date: "29 Oct 2026",
      time: "11:30 AM",
      reason: "Skin Allergy",
      status: "Pending",
    },
    {
      id: 3,
      patient: "Rohan Mehta",
      date: "29 Oct 2026",
      time: "02:00 PM",
      reason: "Follow-up",
      status: "Confirmed",
    },
    {
      id: 4,
      patient: "Sneha Patil",
      date: "30 Oct 2026",
      time: "09:30 AM",
      reason: "General Consultation",
      status: "Pending",
    },
  ];

  const stats = [
    {
      title: "Total Appointments",
      count: 48,
      icon: "bi-calendar-check",
      color: "primary",
    },
    {
      title: "Today's Appointments",
      count: 8,
      icon: "bi-calendar-day",
      color: "success",
    },
    {
      title: "Pending Requests",
      count: 3,
      icon: "bi-clock-history",
      color: "warning",
    },
    {
      title: "Completed",
      count: 37,
      icon: "bi-check-circle",
      color: "info",
    },
  ];

  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Doctor Dashboard</h2>
          <p className="text-muted mb-0">
            Welcome back, Dr. Amit Patel
          </p>
        </div>

        <button className="btn btn-outline-danger">
          <i className="bi bi-box-arrow-right me-2"></i>
          Logout
        </button>
      </div>

      {/* Doctor Profile */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body d-flex align-items-center">
          <div className="rounded-circle bg-primary text-white p-4 me-3">
            <i className="bi bi-person-badge fs-2"></i>
          </div>

          <div>
            <h5 className="fw-bold mb-1">Dr. Amit Patel</h5>
            <p className="text-muted mb-1">
              Cardiologist | MBBS, MD
            </p>
            <p className="text-muted mb-0">
              10 years experience · City Heart Clinic
            </p>
          </div>

          <div className="ms-auto d-none d-md-block">
            <span className="badge bg-success">Profile Active</span>
          </div>
        </div>
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

      {/* Appointments Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
          <h5 className="mb-0">My Appointments</h5>
          <button className="btn btn-outline-primary btn-sm">
            View All
          </button>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Patient</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td>{appointment.patient}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.reason}</td>
                    <td>
                      <span
                        className={`badge ${
                          appointment.status === "Confirmed"
                            ? "bg-success"
                            : "bg-warning text-dark"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
