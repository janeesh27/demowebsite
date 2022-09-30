import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <>
      <div className="userform" id="form">
        <form action="" >
          <div>
            <label htmlFor="username">Full Name</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Your Name.."
            />
          </div>
          <div>
            <label htmlFor="Email">Email Address</label>
            <input
              type="text"
              name="Email"
              id="Email"
              placeholder="theindegenous@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="Country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Ex:India,USA,France..."
            />
          </div>
          <div>
            <label htmlFor="Discription">Reason You Want to Join</label>
            <input
              type="text"
              name="reason"
              id="reason"
              placeholder="150-200 words... "
            />
          </div>
          <div>
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
