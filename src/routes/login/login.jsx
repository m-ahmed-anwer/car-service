import React from "react";

import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg "
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 mt-5">
            <form>
              <div className="form-outline mb-4">
                <label className="form-label" for="form1Example13">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  style={{ fontSize: 13 }}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label  " for="form1Example23">
                  Password
                </label>
                <input
                  type="password"
                  id="form1Example23"
                  placeholder="Enter your email"
                  className="form-control form-control-lg"
                  style={{ fontSize: 13 }}
                />
              </div>

              <div className="d-flex   mb-4">
                <Link to={"/"} className="text-md">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
