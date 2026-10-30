
import React from "react";
import { Link } from "react-router-dom";

function DoctorTable() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Rahul Sharma",
      qualification: "MBBS, MD",
      specialization: "Cardiologist",
      experience: 10,
      consultationFee: 800,
      clinicName: "City Heart Clinic",
      clinicAddress: "Andheri West, Mumbai",
    },
    {
      id: 2,
      name: "Dr. Priya Patel",
      qualification: "MBBS, MD",
      specialization: "Dermatologist",
      experience: 6,
      consultationFee: 600,
      clinicName: "Skin Care Clinic",
      clinicAddress: "Bandra West, Mumbai",
    },
    {
      id: 3,
      name: "Dr. Amit Desai",
      qualification: "BDS, MDS",
      specialization: "Dentist",
      experience: 8,
      consultationFee: 500,
      clinicName: "Smile Dental Care",
      clinicAddress: "Thane, Mumbai",
    },
    {
      id: 4,
      name: "Dr. Sneha Kulkarni",
      qualification: "MBBS, MD",
      specialization: "Pediatrician",
      experience: 5,
      consultationFee: 700,
      clinicName: "Little Stars Clinic",
      clinicAddress: "Powai, Mumbai",
    },
  ];

  return (
    <div className="container mt-4 mb-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Doctor List</h4>

          <Link to="/doctors/add" className="btn btn-light">
            <i className="bi bi-plus-circle me-2"></i>
            Add Doctor
          </Link>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Doctor Name</th>
                  <th>Qualification</th>
                  <th>Specialization</th>
                  <th>Experience</th>
                  <th>Consultation Fee</th>
                  <th>Clinic Name</th>
                  <th>Clinic Address</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {doctors.map((doctor) => (
                  <tr key={doctor.id}>
                    <td>{doctor.id}</td>
                    <td>{doctor.name}</td>
                    <td>{doctor.qualification}</td>
                    <td>{doctor.specialization}</td>
                    <td>{doctor.experience} years</td>
                    <td>₹{doctor.consultationFee}</td>
                    <td>{doctor.clinicName}</td>
                    <td>{doctor.clinicAddress}</td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2 mb-1">
                        Edit
                      </button>

                      <button className="btn btn-danger btn-sm mb-1">
                        Delete
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

export default DoctorTable;
