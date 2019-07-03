import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    const { dateList, resetData } = this.props;
    return (
      <div>
        <Link to="/editform">
          <button className="btn__mood" onClick={resetData}>
            +
          </button>
        </Link>
        <div className="icons__cointainer">
          {dateList.map((item, index) =>
            item.mood === "smile" ? (
              <div className="face__container" key={index}>
                <i class="fas fa-smile smile" />
              </div>
            ) : (
              <div className="face__container" key={index}>
                <i class="fas fa-frown sad" />
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default Home;
