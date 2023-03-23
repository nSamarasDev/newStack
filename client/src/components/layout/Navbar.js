import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const location = useLocation();

  const authLinks = (
    <ul>
      {/* <li>
        <Link to="/contact">Contact</Link>
      </li> */}

      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="/login">
          <i className="fas fa-sign-out-alt"></i>
          {"  "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/register"
          className={location.pathname === "/register" ? "active" : ""}
        >
          Register
        </Link>
      </li>
      <li>
        <Link
          to="/login"
          className={location.pathname === "/login" ? "active" : ""}
        >
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <i className="fas fa-code"></i> Random
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
