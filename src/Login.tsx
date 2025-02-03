import React, { useEffect, useState } from "react";
import TimeDisplay from "./components/TimeDisplay";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "./firebase-config";  

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sign In";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      // adicionar a autenticação por email e senha após finalizar página search
      navigate("/home");
    }
  };

  
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Usuário logado:", user);
      navigate("/home");  
    } catch (error) {
      console.error("Erro ao fazer login com o Google:", error);
    }
  };

  return (
    <div className="login-container">
      <header>
        <div className="status-bar">
          <TimeDisplay />
          <div className="icons">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 24 24">
              <image href="/public/header-signal.svg" />
            </svg>
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 24 24">
              <image href="/public/header-wifi.svg" />
            </svg>
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 24 24">
              <image href="/public/header-battery.svg" />
            </svg>
          </div>
        </div>
        <h1>Audio</h1>
        <p>It’s modular and designed to last</p>
      </header>

      <main>
        <section className="login-form">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <img src="/public/icon-email.svg" alt="Email Icon" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <img src="/public/icon-password.svg" alt="Password Icon" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="forgot-password">Forgot password</p>
            <button type="submit" className="login-button">
              Sign In
            </button>
            <p className="google-sign-in" onClick={handleGoogleSignIn} style={{ cursor: "pointer" }}>
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 24 24">
                <image href="/public/icon-google.svg" />
              </svg>
              Sign in with Google
            </p>
          </form>
        </section>
      </main>

      <footer>
        <p className="signup-link">
          Didn’t have an account? <Link to="/signup">Sign Up here</Link>
        </p>
      </footer>
    </div>
  );
};

export default Login;
