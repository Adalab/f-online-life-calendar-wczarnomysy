import React from "react";
import "./App.scss";
import Home from "../src/components/Home/Home";
import Form from "../src/components/Form/Form";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newDate: new Date(),
      newMood: "",
      newMessage: "",
      dateList: []
    };
    this.handleDate = this.handleDate.bind(this);
    this.handleMood = this.handleMood.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleMoodData = this.handleMoodData.bind(this);
    this.saveData = this.saveData.bind(this);
    this.resetData = this.resetData.bind(this);
  }

  componentDidMount() {
    const savedData = JSON.parse(localStorage.getItem("SavedDataArr"));
    const savedCalendar = savedData ? savedData : [];
    this.setState({ dateList: savedCalendar });
  }

  handleDate(date) {
    this.setState({
      newDate: date
    });
  }

  handleMood(event) {
    const moodValue = event.currentTarget.value;
    this.setState({
      newMood: moodValue
    });
  }

  handleMessage(event) {
    const messageValue = event.currentTarget.value;
    this.setState({
      newMessage: messageValue
    });
  }

  handleMoodData() {
    const moodData = {
      date: this.state.newDate,
      mood: this.state.newMood,
      message: this.state.newMessage
    };
    const dateList = [...this.state.dateList, moodData];
    this.setState(prevState => ({
      dateList
    }));
    this.saveData(dateList);
  }

  saveData(dateList) {
    localStorage.setItem("savedDataArr", JSON.stringify(dateList));
    console.log(this.state);
  }

  resetData() {
    this.setState({
      newDate: "",
      newMood: "",
      newMessage: ""
    });
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1>How was your day?</h1>
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  dateList={this.state.dateList}
                  resetData={this.resetData}
                />
              )}
            />
            <Route
              path="/editform"
              render={() => (
                <Form
                  handleDate={this.handleDate}
                  handleMood={this.handleMood}
                  handleMessage={this.handleMessage}
                  handleMoodData={this.handleMoodData}
                  mood={this.state.newMood}
                  data={this.state.newDate}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
