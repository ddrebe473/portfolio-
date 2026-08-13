import React from "react";
import "../index.css";

const Contact = () => {
  return (
    <div className="contactCard">
      <div className="card">
        <h2>Contact Me</h2>
        <form className="row">
          <div className="col">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Email</label>
              <input type="text" />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Phone</label>
              <input type="text" />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Message</label>
              <textarea />
            </div>
          </div>

          <div className="col">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
