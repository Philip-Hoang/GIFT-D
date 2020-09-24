import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import leftAngle from "../Images/leftAngle.PNG";
import facebookIcon from "../Images/facebookIcon.svg";
import googleIcon from "../Images/googleIcon.svg";

function mapChoices(props) {
  let choices = props.choices.map((choice) => {
    return choice === "Min" || choice === "Max" ? (
      <React.Fragment key={Math.random() * props.keyIndex}>
        <form key={Math.random() * props.keyIndex}>
          <div className="form-group price-box">
            <label className={true ? `price-text` : null}>{choice}.</label>
            <input
              className="form-control"
              onChange={props.onHandleChange}
              type="number"
              name={choice.toLowerCase()}
            />
          </div>
          {choice === "Min" ? (
            <h3>
              <button
                className="badge badge-pill badge-light border border-dark next-button-inverse"
                onClick={props.nextQuestion}
              >
                Next
              </button>
            </h3>
          ) : null}
        </form>
      </React.Fragment>
    ) : props.keyIndex === 1 ? (
      <h3 className="" key={Math.random() * props.keyIndex}>
        <button
          className="badge badge-pill badge-light border border-dark gift-button-inverse"
          onClick={props.nextQuestion}
          name={props.choiceState}
          value={choice}
        >
          {choice}
        </button>
      </h3>
    ) : props.keyIndex === 11 ? (
      <h3 className="mb-4" key={Math.random() * props.keyIndex}>
        <button
          className={
            choice === "Sign Up with Email"
              ? `badge badge-pill badge-light border border-dark gift-button-inverse`
              : `badge badge-pill badge-light border border-dark gift-button`
          }
          onClick={props.nextQuestion}
          name={props.choiceState}
          value={choice}
        >
          {/* {choice} */}
          {(() => {
            switch (choice) {
              case "Sign up with Google":
                return (
                  <span>
                    <img src={googleIcon} alt="googleicon" /> {choice}
                  </span>
                );
              case "Sign up with Facebook":
                return (
                  <span>
                    <img src={facebookIcon} alt="facbeookicon" /> {choice}
                  </span>
                );
                break;
              default:
                return choice;
            }
          })()}
        </button>
      </h3>
    ) : props.keyIndex === 12 ? (
      <div className="col-9">
        <form>
          <div className="form-group">
            {(() => {
              switch (choice) {
                case "Email":
                  return (
                    <React.Fragment>
                      <label className="sign-up-text">{choice}</label>
                      <input
                        className="form-control sign-up-input"
                        type="text"
                        name={choice.toLowerCase()}
                        onChange={props.onHandleChange}
                      />
                    </React.Fragment>
                  );
                  break;
                case "Password":
                  return (
                    <React.Fragment>
                      <label className="sign-up-text">{choice}</label>
                      <input
                        className="form-control sign-up-input"
                        type="password"
                        name={choice.toLowerCase()}
                        onChange={props.onHandleChange}
                      />
                    </React.Fragment>
                  );
                  break;
                case "Confirm Password":
                  return (
                    <React.Fragment>
                      <label className="sign-up-text">{choice}</label>
                      <input
                        className="form-control sign-up-input"
                        type="password"
                        name={choice.toLowerCase().replace(/\s/g, "")}
                        onChange={props.onHandleChange}
                      />

                      <button
                        className="form-control sign-up-button mt-4"
                        onClick={props.onClickSignUp}
                      >
                        Sign Up
                      </button>
                    </React.Fragment>
                  );
                  break;
              }
            })()}
          </div>
        </form>
      </div>
    ) : choice === "Name" ? (
      <div className="col-9" key={props.keyIndex}>
        <form>
          <div className="form-group">
            <React.Fragment>
              <label className="name-text">{choice}</label>
              <input
                className="form-control name-input"
                type="text"
                name={choice.toLowerCase().replace(/\s/g, "")}
                onChange={props.onHandleChange}
              />
            </React.Fragment>
          </div>
        </form>
      </div>
    ) : (
      <h3 className="" key={Math.random() * props.keyIndex}>
        <button
          className={
            choice === "Sign Up with Email"
              ? `badge badge-pill badge-light border border-dark gift-button-inverse`
              : choice === "Save"
              ? `save-button`
              : `gift-button`
          }
          onClick={
            choice === "Save"
              ? props.onClickSaveResults
              : choice === "Continue to Results"
              ? props.onClickGoToResults
              : props.nextQuestion
          }
          name={props.choiceState}
          style={
            choice === "Save Results" || choice === "Continue to Results"
              ? { width: "400px" }
              : choice === "Save"
              ? { width: "400px", height: "auto" }
              : null
          }
          value={choice}
        >
          {/* {choice} */}
          {(() => {
            switch (choice) {
              case "Sign up with Google":
                return (
                  <span>
                    <img src={googleIcon} alt="googleicon" /> {choice}
                  </span>
                );
              case "Sign up with Facebook":
                return (
                  <span>
                    <img src={facebookIcon} alt="facbeookicon" /> {choice}
                  </span>
                );
                break;
              default:
                return choice;
            }
          })()}
        </button>
      </h3>
    );
  });
  return choices;
}

function Questions(props) {
  let choices = mapChoices(props);
  return (
    <div className="" key={Math.random() * props.keyIndex}>
      <div className="col">
        {props.header1 ? (
          <h1 className="gift-header1">{props.header1}</h1>
        ) : null}
        {props.header3 ? (
          <h3 className="gift-header3">{props.header3}</h3>
        ) : null}
        {props.question ? (
          <p className="gift-paragraph">{props.question}</p>
        ) : null}
        {false ? (
          <div className="form-row" style={{ marginLeft: "100px" }}>
            {choices}
          </div>
        ) : (
          <div className="form-row" style={{ marginLeft: "100px" }}>
            {choices}
          </div>
        )}
      </div>
    </div>
  );
}

export default Questions;
