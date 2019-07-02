import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dayMood: "",
      isVisible: false
    };
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1>How was your day?</h1>
        </header>
        <main>
          <button className="btn__mood">+</button>
          <p className="icons__cointainer" />
          <form>
            <h2>Form</h2>
            <label for="month">Date</label>
            <input type="date" id="month" name="month" />
            <h3>Please select your mood wisely</h3>
            <label for="moodoption1">
              <input id="moodoption1" type="radio" value="smile" />
              :)
            </label>
            <label for="moodoption2">
              <input id="moodoption2" type="radio" value="sad" />
              :(
            </label>
            <div className='positive__comment'>
              <h3>Remember only good things!</h3>
              <textarea name="" id="" cols="30" rows="1" />
            </div>
          </form>
          <button className="btn__save">Save</button>
          <button className="btn__cancel">Cancel</button>
        </main>
      </div>
    );
  }
}

export default App;
