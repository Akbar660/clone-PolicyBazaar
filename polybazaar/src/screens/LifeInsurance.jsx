import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./LifeInsurance.css";

export default function Termlife() {
  return (
    <div className="outer-container">
       {/* <Navbar/> */}
      <div className="inner-box">
       
        <div className="insur-left-div">
          <img
            className="aki-img"
            src="https://termlife.policybazaar.com/assets/images/akshayimg.png"
            alt=""
          />
        </div>

        <div className="insur-left">
          <div>
            <p className="insur-head">
               1 Crore life cover at ₹490/month+
              <br />
              <span>Get insured from the comfort of your home</span>
            </p>
          </div>
          <div className="insur-head-info">
            <p>
              <li>No Medical Tests Required</li>
              <li>COVID - 19 covered</li>
            </p>
          </div>

          <div className="input-gender">
           
             
              <input placeholder="Male"  readOnly />
            
            <br />
            <input placeholder="Female" readOnly />
            <br />
          </div>

          <div className="input-detail">
            <input type="text" placeholder="Name" />
            <br />
            <br />
            <input type="date" />
            <br />
            <br />
            <input type="tel" placeholder="123-45-678" />
            <br />
            <br />
            <button><a href="/maxlifecheckout">View Free Quotes <span>→</span></a></button>
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="footer-desc">
          +On the basis of your profile
          <br />
          Premium displayed for 18 years old, 20 years policy term
          <br />
          Prices offered by the insurer are as per the IRDAI approved insurance
          plans
          <br/> All savings and online discounts are provided by insurers as per
          IRDAI approved insurance plans 
          <br/>Standard Terms and Conditions Apply.
          <br/>Tax Benefits are subject to changes in tax laws.
          <br/> Policybazaar
          Insurance Brokers Private Limited (formerly known as Policybazaar
          Insurance Web Aggregator Private Limited) <br/>CIN: U74999HR2014PTC053454 |
          Registered Office - Plot No.119, Sector - 44, Gurgaon, Haryana –
          122001 Policybazaar is now registered as a Direct Broker |
          Registration No. 742, Registration Code No. 
          <br/>IRDA/ DB 797/ 19, Valid
          till 09/06/2024, License category- Direct Broker (Life & General) |
          Visitors are hereby informed that their information submitted on the
          website may be shared with insurers. Product information is authentic
          and solely based on the 
          <br/>information received from the insurers. ©
          <br/>Copyright 2008-2022 policybazaar.com. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
