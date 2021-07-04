import React from "react";
import WeCivilLogo from "../../assets/images/wecivil-logo.svg";
import './logo.css'

export default function Logo() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 col-sm-12 logo">
          <img src={WeCivilLogo} className="img-fluid image" alt="WeCivil Logo" />
        </div>
        <div className="col-md-6 col-sm-12 logo-text">
            <p className="wecivil" style={{color:'#0062FF'}}>
                WeCivil
            </p>
            <p className="tagline">
                Creating a more informed democracy..
            </p>
        </div>
      </div>
    </div>
  );
}
