import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "./firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import TimeDisplay from "./components/TimeDisplay";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Sign Up";
  }, []);

  // Cadastro com Email e Senha
  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");  
    } catch (error: any) {
      setError(error.message);
    }
  };

  // Cadastro/Login com Google
  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Usuário cadastrado/logado com Google:", result.user);
      navigate("/home");
    } catch (error) {
      console.error("Erro ao fazer login com o Google:", error);
      setError("Failed to sign up with Google.");
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
          <form className="form" onSubmit={handleSignUp}>
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

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="login-button signup-button">Sign Up</button>

            <p className="google-sign-in" onClick={handleGoogleSignUp} style={{ cursor: "pointer" }}>
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 24 24">
                <image href="/public/icon-google.svg" />
              </svg>
              Sign up with Google
            </p>
          </form>
        </section>
      </main>

      <footer>
        <p className="signup-link">
          If you have an account? <Link to="/">Sign In here</Link>
        </p>
      </footer>
    </div>
  );
};

export default SignUp;
