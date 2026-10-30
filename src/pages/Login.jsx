
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";



function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      role: "user", // Default role set to "admin"
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // Here you would typically handle the login logic, e.g., API call
    // For now, we'll just navigate to a protected route
    if (data.role === "doctor") {
      navigate("/doctor-dashboard");
    }
    else if (data.role === "admin") {
      navigate("/admin-dashboard");
    }
    else if (data.role === "user") {
      navigate("/doctors");
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center py-5"
      style={{ backgroundColor: "#f0f6ff" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card border-0 shadow rounded-4">
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <i className="bi bi-heart-pulse-fill text-primary display-4"></i>

                  <h2 className="fw-bold mt-3">Welcome Back!</h2>

                  <p className="text-secondary">
                    Login to your MediCare account
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your email"
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
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Password
                    </label>

                    <input
                      type="password"
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message:
                            "Password must contain at least 6 characters",
                        },
                      })}
                    />

                    {errors.password && (
                      <small className="text-danger">
                        {errors.password.message}
                      </small>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2 mt-3"
                  >
                    Login
                  </button>
                </form>

                <div className="text-center mt-4">
                  <span className="text-secondary">
                    Don't have an account?
                  </span>{" "}
                  <Link
                    to="/register"
                    className="text-decoration-none fw-semibold"
                  >
                    Register
                  </Link>
                </div>

                <div className="text-center mt-3">
                  <Link
                    to="/"
                    className="text-secondary text-decoration-none"
                  >
                    <i className="bi bi-arrow-left me-1"></i>
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
