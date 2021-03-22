import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { MonsterCard } from "./ui-components/card-list/card-list.component";
import { SearchBox } from "./ui-components/search-box/search-box.component";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ users: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { users } = this.state;
    const f = users.filter((user) =>
      user.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          onChange={this.handleChange}
        ></SearchBox>
        <MonsterCard mns={f} />
      </div>
    );
  }
}

export default Main;
