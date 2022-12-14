import React, { Component } from "react";
import BtnHeader from "./BtnHeader";
import Cards from "./Cards";
import Loader from "./Loader";
export default class popular extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      language: "All",
      error: "",
    };
  }

  // resposible for first time updating  the data in the state
  componentDidMount() {
    let data = fetch(
      "https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories"
    )
      .then((res) => res.json())
      .then((resposeData) => {
        this.setState({
          data: resposeData,
        });
      })
      .catch((err) => {
        this.setState({
          error: "no result found on this query",
        });
      });
  }

  // this method is to change  the state value
  handleClick = ({ target }) => {
    let value = target.innerText;
    let allUsers = fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${value}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((resposeData) => {
        this.setState({
          data: resposeData,
          language: value,
        });
      });
  };

  render() {
    return (
      <div className="popular-user-container">
        <BtnHeader
          handleClick={this.handleClick}
          value={this.state.language}
        />

        {/* if the data  is not equal to null then show the cards with the data */}
        {this.state.data === null || this.state.data === undefined ? (
          <Loader />
        ) : (
          <Cards Data={this.state.data.items} />
        )}
      </div>
    );
  }
}