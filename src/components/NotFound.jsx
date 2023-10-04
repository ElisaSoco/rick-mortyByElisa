import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="container error-container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="error-code">404</h3>

            <h1 className="error-message">
              Oops! The page you're looking for could not be found.
            </h1>
            <Link to={"/home"}>
              <button className="btn btn-primary mt-3">Go to Home Page</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
