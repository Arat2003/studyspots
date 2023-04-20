import React from "react";
import "./Login.css";
function App() {
  return (
    <Login/>
  );
}

export default App;

function Login() {
  return(
    <div className = "form">
    <div className="form-body">
      <h1 class="form-title">Login</h1>

    <div className="email">
        <label className="form__label" for="email">Email </label>
        <input  type="email" id="email" className="form__input" placeholder="Email"/>
    </div>
    <div className="password">
        <label className="form__label" for="password">Password </label>
        <input className="form__input" type="password"  id="password" placeholder="Password"/>
    </div>

</div>
<div class="footer">
    <button type="submit" class="btn">Log in</button>
    <a href ="../register"><button type="button" class="btn">Register</button></a>
    </div>
</div>      
)    
}
