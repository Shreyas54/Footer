import React from "react";
import "./Contact.css";

import Phone from "./phone.png";
import Clock from "./clock.png";

const Contact = () => {
  return (
    <>
      <div className="map-responsive">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d464.7325241019295!2d79.110844!3d21.277001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c48415c52b69%3A0xc2a6a0642d018721!2sChandkapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1632250265505!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>{" "}
      </div>

      <div className="row1-container">
        <div className="box box-down brown">
          <h1>WORKING HOURS</h1> <hr />
          <table>
            <tr>
              <td>
                {/* <!-- add info accoding to your later -->   */}
                <p>Monday-Thursday : 10AM to 7PM </p>
                <p>Friday & Saturday : 10AM to 4PM </p>
                <p>Sunday Open</p>
              </td>
              <td>
                <img src={Clock} alt="clock" style={{ marginLeft: "250px" }} />
              </td>
            </tr>
          </table>
        </div>
        <div className="box box-down brown">
          <h1>Contact </h1>
          <hr />
          <table>
            <tr>
              <td>
                {/* <!-- add info accoding to your later -->  */}
                <p>Phone :7020044091</p>
                <p>Address H.No. 1951, W.N.4, Khaperkheda, Saoner, Nagpur</p>
                <p>Email :info@suvidhafoundationedutech.org</p>
              </td>
              <td>
                <img src={Phone} alt="phone" style={{ marginLeft: "70px" }} />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contact;
