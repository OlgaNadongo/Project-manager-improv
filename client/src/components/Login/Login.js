import { useState } from "react";
// import LoginForm from '../Login/LoginForm'
// import SignUpForm from "../Signup"; 

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  const [user, setUser] = useState(null);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <h5>Sweezy</h5>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
         
          <p>
            Don't have an account? &nbsp;
            <button  onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          
          <p>
            Already have an account? &nbsp;
            <button onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login