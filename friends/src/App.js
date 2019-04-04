import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import FriendList from "./component/FriendList";
import styled from "styled-components";
import FriendForm from "./component/FriendForm";
import UpdateForm from "./component/UpdateForm"

const Application = styled.div`
  width: 600px;
  padding: 20px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  border: grey solid;
  background: lightgrey;
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
  // adding friend form
  addFriend = newFriend => {
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        this.setState({ friends: res.data });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  // updating friend form
  updateFriend = updatedFriend => {
    axios
      .post(`http://localhost:5000/${updatedFriend.id}`, updatedFriend)
      .then(res => {
        this.setState({ friends: res.data });
        console.log(res);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  setActiveFriend = friend => {
    this.setState({ activeFriend: friend });
  };

deleteFriend = id => {
  axios
  .delete(`http://localhost:5000/${id}`)
  .then(res => {
    this.setState({ friends: res.data });
    console.log(res);
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
          <nav>
            <NavLink exact to="/new-friend">
              <button> Add friend</button>
            </NavLink>
            <NavLink exact to="/">
              <button>home</button>
            </NavLink>
          </nav>


          <Route
            exact
            path="/"
            render={props => (<FriendList 
              friends={this.state.friends} 
              setActiveFriend={this.setActiveFriend}
              deleteFriend={this.deleteFriend}
              history={props.history}
              match={props.match}
              location={props.location}
              {...props}
              />
              )}
          />


          <Route
            exact
            path="/new-friend"
            render={props => (
              <FriendForm {...props} addFriend={this.addFriend} />
            )}
          />


          <Route
            path="/update-friend"
            render={props => (
              <UpdateForm
                updateFriend={this.updateFriend}
                activeFriend={this.state.activeFriend}

              />
            )}
          />
        </Application>
      </Router>
    );
  }
}

export default App;
