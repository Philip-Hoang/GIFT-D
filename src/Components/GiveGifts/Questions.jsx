import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import leftAngle from "../Images/leftAngle.PNG";

function mapChoices(props) {
  let choices = props.choices.map((choice) => {
    return choice === "Min" || choice === "Max" ? (
      <React.Fragment key={Math.random() * props.keyIndex}>
        <form key={Math.random() * props.keyIndex}>
          <div className="form-group col">
            <label className="gift-button">{choice}</label>
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
                className="badge badge-pill badge-light border border-dark gift-button"
                onClick={props.nextQuestion}
              >
                Next
              </button>
            </h3>
          ) : null}
        </form>
      </React.Fragment>
    ) : props.keyIndex === 1 ? (
      <h3 className="mb-4" key={Math.random() * props.keyIndex}>
        <button
          className="badge badge-pill badge-light border border-dark gift-button-inverse"
          onClick={props.nextQuestion}
          name={props.choiceState}
          value={choice}
        >
          {choice}
        </button>
      </h3>
    ) : (
      <h3 className="mb-4" key={Math.random() * props.keyIndex}>
        <button
          className="badge badge-pill badge-light border border-dark gift-button"
          onClick={props.nextQuestion}
          name={props.choiceState}
          value={choice}
        >
          {choice}
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
          <h1 className="gift-header1 m-0">{props.header1}</h1>
        ) : null}
        {props.header3 ? (
          <h3 className="gift-header3">{props.header3}</h3>
        ) : null}
        {props.question ? (
          <p className="gift-paragraph">{props.question}</p>
        ) : null}
        <div className="form-row">{choices}</div>
        {props.keyIndex !== 1 ? (
          <div className="">
            <img className="back-image " src={leftAngle} alt="left-angle" />
            <h3
              className="back-button ml-2 pt-3"
              onClick={props.previousQuestion}
            >
              Back
            </h3>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Questions;
