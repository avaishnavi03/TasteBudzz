import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle, setFavicon } from "../utils/titleSlice";

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch(setPageTitle("Login"));
    dispatch(setFavicon("/loginicon.png"));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  }

  return (
    <div className="login-page">
      <div className="login-form">
        <h2 className="login-title">Login</h2>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            className="login-input"
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            className="login-input"
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
