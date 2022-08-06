import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import "./Login.css";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "../../api/axios";

const LOGIN_URL = "/login";

const Login = () => {
  const usernameRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/projects";

  const { setAuth } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    if (errMsg) {
      setErrMsg("");
    }
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL, { username, password });

      if (response?.data?.auth) {
        const url = response.data.result[0].url;
        const accessToken = response.data.token;

        setAuth({ username, password, accessToken, url });
        navigate(from, { replace: true });
      } else {
        setErrMsg(response.data.message);
      }
    } catch (err) {
      setErrMsg(err.message);
    }
  };

  return (
    <section className="login-container">
      <div className="login-container-box">
        <p className="error-message">{errMsg}</p>

        <h1>Sign In!</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <FontAwesomeIcon icon={faUser} className="user-icon" />
          <input
            type="text"
            id="username"
            ref={usernameRef}
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Type your username"
          />
          <label htmlFor="password">Password</label>
          <FontAwesomeIcon icon={faLock} className="password-icon" />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type your password"
          />

          <button
            disabled={username && password ? false : true}
            className="login-button"
          >
            Login
          </button>
        </form>
        <p>Not registered yet?</p>

        <Link to="/register" className="register-link">
          Register
        </Link>
      </div>
    </section>
  );
};

export default Login;
