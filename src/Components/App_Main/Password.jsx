import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import vicky from "../images/vicky.jpg";
import insta from "../images/insta.svg";
function Password() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === "vicky") {
      // Store login info if needed
      localStorage.setItem("grillfood-auth", "true");

      // Redirect to home or dashboard
      navigate("/FoodMain");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <>
      <section className="paasword-sec">
        <div className="insta-img-div">
          <div className="password-vicky">
            <img src={vicky} alt="vicky-img" />
          </div>
          <a
            href="https://www.instagram.com/mr.kumar_vicky"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}  
          >
            <div className="insta-id-div">
              <img src={insta} alt="insta-img" />
              <h1>Mr.kumar-vicky</h1>
            </div>
          </a>
        </div>
        <div className="pass-main-div">
          <h1>Pizzava - Fast Food Store</h1>
          <h2> (Password: vicky )</h2>
          <h3>
            This store is password protected. Use the password to enter the
            store.
          </h3>
        </div>
        <form className="password-form" action="" onSubmit={handleSubmit}>
          <div className="form-main-div">
            <label htmlFor="">Enter store password *</label>
            <input
              type="text"
              placeholder="Please enter password vicky"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="enter-btn" type="submit">
              Enter
            </button>
            {error && (
              <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
            )}
          </div>
        </form>
      </section>
    </>
  );
}

export default Password;
