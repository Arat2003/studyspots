import React from "react";
import "./Register.css";
function App() {
  return (
    <Register
      spanText1="Trojan Study Spots"
      spanText2="Enter Email"
      spanText3="Create new password"
      spanText4="Re-enter password"
      spanText5="REGISTER"
    />
  );
}

export default App;

function Register(props) {
  const { spanText1, spanText2, spanText3, spanText4, spanText5 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="registerscreen">
        <div className="overlap-group">
          <h1 className="titlevalign-text-middleinter-normal-black-36px">
            <span>
              <span className="inter-normal-black-36px">{spanText1}</span>
            </span>
          </h1>
          <div className="overlap-group3">
            <div className="enter-emailvalign-text-middleinter-normal-black-15px">
              <span>
                <span className="inter-normal-black-15px">{spanText2}</span>
              </span>
            </div>
          </div>
          <div className="overlap-group2">
            <div className="x-passwordvalign-text-middleinter-normal-black-15px">
              <span>
                <span className="inter-normal-black-15px">{spanText3}</span>
              </span>
            </div>
          </div>
          <div className="overlap-group4">
            <div className="x-passwordvalign-text-middleinter-normal-black-15px">
              <span>
                <span className="inter-normal-black-15px">{spanText4}</span>
              </span>
            </div>
          </div>
          <div className="overlap-group1">
            <div className="placevalign-text-middleinter-normal-white-24px">
              <span>
                <span className="inter-normal-white-24px">{spanText5}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

