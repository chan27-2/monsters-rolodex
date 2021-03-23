import React, { Component } from "react";
import { MonsterCard } from "./ui-components/card-list/card-list.component";
import { SearchBox } from "./ui-components/search-box/search-box.component";

import "./App.css";

class Main extends Component {
  // always runs first before rendering or any other method
  // what if i have async method -> ig that doesn't matter just constructor is called
  // all async methods are fulfilled later.
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: "",
    };
  }

  // Called when the Component is rendered for the first time or window is reloaded,
  // not called when setState id done...!
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ users: users }));
  }

  // handles change of state, the action is in another functional component
  // but change is in this component, this process is called "StepUp The State",
  handleChange = (e) => this.setState({ searchField: e.target.value });

  // extended method from the interface Component (not abstract).
  // when setState is done in a particular component, the render function is called.
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
