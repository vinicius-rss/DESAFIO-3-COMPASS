import React, {useEffect} from 'react';
import TimeDisplay from './components/TimeDisplay';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  useEffect(() => {
    document.title = "Sign In";  
  }, []); 
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
          <form className="form">
            <div className="form-group">
              <img src="/public/icon-email.svg" alt="Email Icon" />
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <img src="/public/icon-password.svg" alt="Password Icon" />
              <input type="password" id="password" name="password" placeholder="Password" required />
            </div>
            <p className="forgot-password">Forgot password</p>
            <button type="submit" className="login-button">Sign In</button>
            <p className="google-sign-in">
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
