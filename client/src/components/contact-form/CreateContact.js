import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Alert from "../layout/Alert";
import { createContact } from "../../actions/contact";

const CreateContact = ({ createContact, history }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const { name, email, description } = formData;

  const navigate = useNavigate();

  const [contactCreated, setContactCreated] = useState(false);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const success = await createContact(formData, history);
    window.scrollTo(0, 0);
    if (success) {
      setContactCreated(true); // set contactCreated to true when contact is successfully created
      setTimeout(() => {
        setContactCreated(false); // reset contactCreated after 3 seconds
        navigate("/");
      }, 500);
    } else {
      navigate("/contact");
    }
  };

  return (
    <Fragment>
      <section className="container">
        <Alert />
        {contactCreated && (
          <div className="alert alert-light">
            <i className="fas fa-check-circle"></i> Contact created
            successfully!
          </div>
        )}
        <h1 className="large text-primary"> Contact Form</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Enter your contact information
        </p>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text">Please enter your name</small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text">Please enter your email</small>
          </div>
          <div className="form-group">
            <textarea
              rows="10"
              cols="100"
              type="text"
              placeholder="Description"
              name="description"
              value={description}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text">Please enter a description</small>
          </div>
          <input type="submit" className="btn btn-primary my-1" />
          <Link className="btn btn-light my-1" to="/">
            Go Back
          </Link>
        </form>
      </section>
    </Fragment>
  );
};

CreateContact.propTypes = {
  createContact: PropTypes.func.isRequired,
};

export default connect(null, { createContact })(CreateContact);
