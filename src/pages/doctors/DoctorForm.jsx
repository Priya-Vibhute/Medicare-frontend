import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function DoctorForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  // Watch selected qualification
  const qualification = watch("qualification");

  // Specializations based on qualification
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
    console.log("Doctor Details:", data);

    // Connect your Spring Boot POST API here.

    reset();
  };

  return (
    <div className="container mt-4 mb-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Add Doctor</h4>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              {/* Doctor Name */}
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Doctor Name
                </label>

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
                <label className="form-label">
                  Qualification
                </label>

                <select
                  className="form-select"
                  {...register("qualification", {
                    required: "Please select qualification",
                    onChange: () => {
                      setValue("specialization", "");
                    },
                  })}
                >
                  <option value="">
                    Select Qualification
                  </option>

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
                <label className="form-label">
                  Specialization
                </label>

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
                  className="form-control"
                  placeholder="Enter consultation fee"
                  {...register("consultationFee", {
                    required:
                      "Consultation fee is required",
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
                <label className="form-label">
                  Clinic Name
                </label>

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
              <div className="col-12 mb-3">
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
              Add Doctor
            </button>

            <button
              type="button"
              className="btn btn-secondary me-2 mb-2"
              onClick={() => reset()}
            >
              Clear
            </button>

            <Link
              to="/doctors"
              className="btn btn-outline-primary mb-2"
            >
              &larr; Go Back to Doctors
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DoctorForm;