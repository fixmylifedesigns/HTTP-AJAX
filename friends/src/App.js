import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FriendList from "./component/FriendList";
import styled from "styled-components";

const Application = styled.div`
width:600px;
  padding:20px 0;
  margin: 0 auto;
  display:flex;
  flex-direction:row;
  border:grey solid;
  background:lightgrey;
`;
class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.friends);
    return (
      <Router>
        <Application className="App">
          <Route
            exact
            path="/"
            render={() => <FriendList friends={this.state.friends} />}
          />
        </Application>
      </Router>
    );
  }
}

export default App;
