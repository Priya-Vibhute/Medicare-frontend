import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function DoctorRegister() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const qualification = watch("qualification");
  const password = watch("password");

  const specializations = {
    MBBS: ["General Physician"],
    BDS: ["Dentist"],
    BAMS: ["Ayurvedic Doctor"],
    BHMS: ["Homeopathic Doctor"],
    BPT: ["Physiotherapist"],
    MD: [
      "Cardiologist",
      "Dermatologist",
      "General Physician",
      "Neurologist",
      "Pediatrician",
      "Psychiatrist",
    ],
    MS: [
      "General Surgeon",
      "Orthopedic Surgeon",
      "ENT Surgeon",
    ],
    MDS: [
      "Orthodontist",
      "Oral Surgeon",
      "Periodontist",
    ],
    DM: [
      "Cardiologist",
      "Neurologist",
      "Gastroenterologist",
    ],
    MCh: [
      "Neurosurgeon",
      "Cardiothoracic Surgeon",
      "Plastic Surgeon",
    ],
  };

  const onSubmit = (data) => {
    console.log("Doctor Registration Details:", data);

    // Connect your Spring Boot registration API here.
    // Never store plain-text passwords in your database.

    reset();
  };

  return (
    <div className="container mt-4 mb-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Doctor Registration</h4>
        </div>

        <div className="card-body p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h5 className="mb-3">Account Details</h5>

            <div className="row">
              {/* Email */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <small className="text-danger">
                    {errors.email.message}
                  </small>
                )}
              </div>

              {/* Password */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Create password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message:
                        "Password must contain at least 8 characters",
                    },
                  })}
                />
                {errors.password && (
                  <small className="text-danger">
                    {errors.password.message}
                  </small>
                )}
              </div>

              {/* Confirm Password */}
              <div className="col-md-6 mb-4">
                <label className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password ||
                      "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <small className="text-danger">
                    {errors.confirmPassword.message}
                  </small>
                )}
              </div>
            </div>

            <hr />
            <h5 className="mb-3">Professional Details</h5>

            <div className="row">
              {/* Doctor Name */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Doctor Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter doctor name"
                  {...register("name", {
                    required: "Doctor name is required",
                    minLength: {
                      value: 3,
                      message:
                        "Name must have at least 3 characters",
                    },
                  })}
                />
                {errors.name && (
                  <small className="text-danger">
                    {errors.name.message}
                  </small>
                )}
              </div>

              {/* Qualification */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Qualification</label>
                <select
                  className="form-select"
                  {...register("qualification", {
                    required: "Please select qualification",
                    onChange: () =>
                      setValue("specialization", ""),
                  })}
                >
                  <option value="">Select Qualification</option>
                  {Object.keys(specializations).map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {errors.qualification && (
                  <small className="text-danger">
                    {errors.qualification.message}
                  </small>
                )}
              </div>

              {/* Specialization */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Specialization</label>
                <select
                  className="form-select"
                  disabled={!qualification}
                  {...register("specialization", {
                    required: "Please select specialization",
                  })}
                >
                  <option value="">
                    {qualification
                      ? "Select Specialization"
                      : "Select qualification first"}
                  </option>
                  {(specializations[qualification] || []).map(
                    (item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    )
                  )}
                </select>
                {errors.specialization && (
                  <small className="text-danger">
                    {errors.specialization.message}
                  </small>
                )}
              </div>

              {/* Experience */}
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Experience (Years)
                </label>
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="Enter experience in years"
                  {...register("experience", {
                    required: "Experience is required",
                    valueAsNumber: true,
                    min: {
                      value: 0,
                      message:
                        "Experience cannot be negative",
                    },
                  })}
                />
                {errors.experience && (
                  <small className="text-danger">
                    {errors.experience.message}
                  </small>
                )}
              </div>

              {/* Consultation Fee */}
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Consultation Fee (₹)
                </label>
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="Enter consultation fee"
                  {...register("consultationFee", {
                    required: "Consultation fee is required",
                    valueAsNumber: true,
                    min: {
                      value: 0,
                      message: "Fee cannot be negative",
                    },
                  })}
                />
                {errors.consultationFee && (
                  <small className="text-danger">
                    {errors.consultationFee.message}
                  </small>
                )}
              </div>

              {/* Clinic Name */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Clinic Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter clinic name"
                  {...register("clinicName", {
                    required: "Clinic name is required",
                  })}
                />
                {errors.clinicName && (
                  <small className="text-danger">
                    {errors.clinicName.message}
                  </small>
                )}
              </div>

              {/* Clinic Address */}
              <div className="col-12 mb-4">
                <label className="form-label">
                  Clinic Address
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter clinic address"
                  {...register("clinicAddress", {
                    required: "Clinic address is required",
                  })}
                />
                {errors.clinicAddress && (
                  <small className="text-danger">
                    {errors.clinicAddress.message}
                  </small>
                )}
              </div>
            </div>

            {/* Buttons */}
            <button
              type="submit"
              className="btn btn-primary me-2 mb-2"
            >
              Register as Doctor
            </button>

            <button
              type="button"
              className="btn btn-secondary me-2 mb-2"
              onClick={() => reset()}
            >
              Clear
            </button>

            <Link
              to="/register"
              className="btn btn-outline-primary mb-2"
            >
              Back to Registration
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DoctorRegister;