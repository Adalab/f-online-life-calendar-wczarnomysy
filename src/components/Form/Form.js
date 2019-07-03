import React from "react";
import "./Form.scss";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

class Form extends React.Component {
  render() {
    const {
      handleDate,
      handleMood,
      handleMessage,
      handleMoodData,
      mood,
      data,
      resetData
    } = this.props;
    return (
      <div>
        <h2>Choose a date</h2>
        <DatePicker selected={data} onChange={handleDate} />
        <h2>Please select your mood wisely</h2>
        <form>
          <label htmlFor="smile">
            <input
              id="smile"
              type="radio"
              name="face"
              value="smile"
              onClick={handleMood}
            />
            :)
          </label>
          <label htmlFor="sad">
            <input
              id="sad"
              type="radio"
              name="face"
              value="sad"
              onClick={handleMood}
            />
            :(
          </label>
          {mood === "smile" ? (
            <div className="comment__container">
              <label htmlFor="positive">Share only good things!</label>
              <input id="positive" type="text" onChange={handleMessage} />
            </div>
          ) : (
            ""
          )}
        </form>
        <Link to={"/"}>
          <button className="btn__save" onClick={handleMoodData}>
            Save
          </button>
        </Link>
        <Link to={"/"}>
          <button className="btn__cancel" onClick={resetData}>
            Cancel
          </button>
        </Link>
      </div>
    );
  }
}

export default Form;
