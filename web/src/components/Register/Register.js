import React from "react";
import "./Register.css";
import Layout from "../Layout";

function App() {
  return (
    <Register/>
  );
}

export default App;

function Register() {
  function handleRegister() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        firstName: firstName, 
        lastName: lastName,
        email: email,
        password: password 
      })
    };

    fetch('/register', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Registration failed');
        }
        alert('Registration successful!');
      })
      .catch(error => {
        console.error('There was an error registering the user:', error);
      });
  }

  return(
    <div>
    <Layout />
    <div className = "form">
    <div className="form-body">
      <h1 class="form-title">Register</h1>
    <div className="username">
        <label className="form__label" for="firstName">First Name </label>
        <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
    </div>
    <div className="lastname">
        <label className="form__label" for="lastName">Last Name </label>
        <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
    </div>
    <div className="email">
        <label className="form__label" for="email">Email </label>
        <input  type="email" id="email" className="form__input" placeholder="Email"/>
    </div>
    <div className="password">
        <label className="form__label" for="password">Password </label>
        <input className="form__input" type="password"  id="password" placeholder="Password"/>
    </div>
    <div className="confirm-password">
        <label className="form__label" for="confirmPassword">Confirm Password </label>
        <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
    </div>
</div>
<div class="footer">
    <button type="submit" class="btn" onClick={handleRegister}>Register</button>
</div>
</div>      
</div>
);    
}
