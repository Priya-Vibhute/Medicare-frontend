import React, { useState } from "react";
import { Link } from "react-router-dom";

function Doctors() {
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("All");

  // Sample data for displaying doctors
  const [doctors] = useState([
    {
      id: 1,
      name: "Dr. Priya Sharma",
      qualification: "MBBS, MD",
      specialization: "Cardiologist",
      experience: 12,
      consultationFee: 1000,
      clinicName: "Sunshine Heart Care",
      clinicAddress: "Andheri West, Mumbai",
    },
    {
      id: 2,
      name: "Dr. Rahul Mehta",
      qualification: "MBBS, MD",
      specialization: "Dermatologist",
      experience: 8,
      consultationFee: 800,
      clinicName: "Skin and Wellness Clinic",
      clinicAddress: "Bandra West, Mumbai",
    },
    {
      id: 3,
      name: "Dr. Anjali Desai",
      qualification: "MBBS",
      specialization: "General Physician",
      experience: 10,
      consultationFee: 600,
      clinicName: "Healthy Life Clinic",
      clinicAddress: "Powai, Mumbai",
    },
    {
      id: 4,
      name: "Dr. Sameer Khan",
      qualification: "MBBS, MS",
      specialization: "Orthopedic Surgeon",
      experience: 15,
      consultationFee: 1200,
      clinicName: "Bone and Joint Care",
      clinicAddress: "Thane, Mumbai",
    },
    {
      id: 5,
      name: "Dr. Neha Gupta",
      qualification: "MBBS, MD",
      specialization: "Pediatrician",
      experience: 9,
      consultationFee: 700,
      clinicName: "Child Care Clinic",
      clinicAddress: "Goregaon, Mumbai",
    },
    {
      id: 6,
      name: "Dr. Arjun Iyer",
      qualification: "MBBS, DM",
      specialization: "Neurologist",
      experience: 11,
      consultationFee: 1100,
      clinicName: "Neuro Care Center",
      clinicAddress: "Dadar, Mumbai",
    },
  ]);

  const specializations = [
    "All",
    ...new Set(doctors.map((doctor) => doctor.specialization)),
  ];

  // Search and filter doctors
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialization
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      doctor.clinicName.toLowerCase().includes(search.toLowerCase());

    const matchesSpecialization =
      specialization === "All" ||
      doctor.specialization === specialization;

    return matchesSearch && matchesSpecialization;
  });

  return (
    <div className="bg-light min-vh-100">
      {/* Page Header */}
      <div className="bg-primary text-white py-5">
        <div className="container">
          <h2 className="fw-bold">
            Find the Right Doctor for Your Health
          </h2>
          <p className="mb-0">
            Find experienced doctors and book appointments
            for yourself or your family.
          </p>
        </div>
      </div>

      <div className="container py-4">
        {/* Search and Filter */}
        <div className="card shadow-sm border-0 mb-4">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Search by doctor name, clinic or specialization"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="col-md-4">
                <select
                  className="form-select form-select-lg"
                  value={specialization}
                  onChange={(e) =>
                    setSpecialization(e.target.value)
                  }
                >
                  {specializations.map((item) => (
                    <option key={item} value={item}>
                      {item === "All"
                        ? "All Specializations"
                        : item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Heading */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold mb-0">Available Doctors</h4>
          <span className="text-muted">
            {filteredDoctors.length} doctors found
          </span>
        </div>

        {/* Doctor Cards */}
        <div className="row g-4">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div className="col-md-6 col-lg-4" key={doctor.id}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start mb-3">
                      <div
                        className="rounded-circle bg-primary-subtle text-primary d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                        style={{
                          width: "65px",
                          height: "65px",
                        }}
                      >
                        <i className="bi bi-person-fill fs-1"></i>
                      </div>

                      <div>
                        <h5 className="fw-bold mb-1">
                          {doctor.name}
                        </h5>
                        <span className="badge bg-info-subtle text-primary">
                          {doctor.specialization}
                        </span>
                        <p className="text-muted small mt-2 mb-0">
                          {doctor.qualification}
                        </p>
                      </div>
                    </div>

                    <hr />

                    <p className="mb-2">
                      <i className="bi bi-briefcase text-primary me-2"></i>
                      <strong>Experience:</strong>{" "}
                      {doctor.experience} years
                    </p>

                    <p className="mb-2">
                      <i className="bi bi-currency-rupee text-primary me-2"></i>
                      <strong>Consultation Fee:</strong> ₹
                      {doctor.consultationFee}
                    </p>

                    <p className="mb-2">
                      <i className="bi bi-hospital text-primary me-2"></i>
                      <strong>Clinic:</strong> {doctor.clinicName}
                    </p>

                    <p className="mb-4">
                      <i className="bi bi-geo-alt text-primary me-2"></i>
                      {doctor.clinicAddress}
                    </p>

                    <Link
                      to={`/book-appointment/${doctor.id}`}
                      className="btn btn-primary w-100"
                    >
                      <i className="bi bi-calendar-check me-2"></i>
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center py-5">
                  <i className="bi bi-search fs-1 text-muted"></i>
                  <h5 className="mt-3">No doctors found</h5>
                  <p className="text-muted">
                    Try another doctor name or specialization.
                  </p>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => {
                      setSearch("");
                      setSpecialization("All");
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Doctors;