import React, { Component } from "react";
import "./footer.css";
import axios from "axios";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      errormessage: "",
    };
  }

  changeHandler = (e) => {
    let err = "";
    let value = e.target.value;
    let line = document.querySelector(".form-control");
    if(e.target.name === "phone") {
      if(!Number(e.target.value)) {
        err =<strong>You must enter digits only</strong>
      }
      if(value.length > 11 || value.length < 11) {
        err =<p style={{fontSize:'0.8rem', color:'red'}}>Phone number must be 11 digits only</p>
      }
    }
    this.setState({errormessage: err});
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://sheet.best/api/sheets/55b664d5-8c33-4cd2-bb90-c2b46b625d26",
        this.state
      )
      .then((response) => {
        console.log(response.status);
      });
    toaster.notify("Thank you for registering", {
      duration: 8000,
    });
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    });
  };

  render() {
    const { firstName, lastName, email, phone } = this.state;
    return (
      <div
        className="container-fluid mt-5 pb-5"
        style={{ backgroundColor: "#e8effa" }}
      >
        <div className="row">
          <div className="col-md-12 text-center mb-5 mt-5">
            <p
              className="footer-header"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              We are building a set of Civic Tech tools to improve engagement,
              political participation, and decision-making towards building
              inclusive societies. Join us to know when we launch our first MVP.
            </p>
            <p className="p-4" style={{ color: "#0062FF" }}>
              Want to know more about us?{" "}
              <a href="https://drive.google.com/file/d/17R8Ex1uQIOMv1px7B3sN0MhWOsLR_jgX/view?usp=sharing"><span style={{ color: "#10E07F", textDecoration: 'none' }}>Here.</span></a>
            </p>
          </div>
          <div
            className="col-md-12"
            id="mapping"
            style={{ maxWidth: "750px", margin: "0 auto" }}
          >
            <form id="form" onSubmit={this.submitHandler}>
              <div className="row row-cols-1 row-cols-md-2">
                <div className="col  mb-2">
                  <input
                    type="text"
                    className="form-control"
                    required
                    pattern="[A-Za-z0-9]+"
                    style={{
                      fontWeight: 200,
                      fontSize: ".8rem",
                      minHeight: "50px",
                    }}
                    name="firstName"
                    value={firstName}
                    onChange={this.changeHandler}
                    id="firstname"
                    placeholder="Firstname"
                  />
                </div>
                <div className="col mb-2">
                  <input
                    type="text"
                    className="form-control"
                    required
                    pattern="[A-Za-z0-9]+"
                    style={{
                      fontWeight: 200,
                      fontSize: ".8rem",
                      minHeight: "50px",
                    }}
                    name="lastName"
                    value={lastName}
                    onChange={this.changeHandler}
                    id="lastname"
                    placeholder="Lastname"
                  />
                </div>
                <div className="col mb-2">
                  <input
                    type="email"
                    className="form-control"
                    required
                    style={{
                      fontWeight: 200,
                      fontSize: ".8rem",
                      minHeight: "50px",
                    }}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    name="email"
                    value={email}
                    onChange={this.changeHandler}
                    id="email"
                    placeholder="Email address"
                  />
                </div>
                <div className="col mb-2">
                  <input
                    type="tel"
                    className="form-control form-field"
                    required
                    pattern="[0-9]{11}"
                    style={{
                      fontWeight: 200,
                      fontSize: ".8rem",
                      minHeight: "50px",
                    }}
                    name="phone"
                    value={phone}
                    onChange={this.changeHandler}
                    id="phone"
                    placeholder="Phone no."
                  />
                {this.state.errormessage}
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-dark"
                style={{
                  fontWeight: 200,
                  fontSize: ".8rem",
                  width: "100%",
                  minHeight: "50px",
                }}
              >
                Keep me informed
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
