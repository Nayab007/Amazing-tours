import React, { Component } from "react";
import "./tour.scss";
export default class Tour extends Component {
  state = {
    showDetails: false
  };
  handleDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <article className="tour">
        <div className="tourimg-container">
          <img src={img} alt="Amazing tour" />
          <span className="close-btn" onClick={() => removeTour(id)}>
            <i className="fas fa-times" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.handleDetails}>
              <i className="fas fa-info" />
            </span>
          </h5>
          {this.state.showDetails && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
