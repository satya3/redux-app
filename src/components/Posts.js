import React, { Component } from "react";

export default class Posts extends Component {
  componentWillMount() {
    // const users = "../data/users.json";
    // console.log(users);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => (users = data));
    console.log(users);
  }

  render() {
    return (
      <div>
        <h1>Post</h1>
      </div>
    );
  }
}
