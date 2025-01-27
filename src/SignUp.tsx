// src/SignUp.tsx
import React from 'react';

const SignUp: React.FC = () => {
  return ( 
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
