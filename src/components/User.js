import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/user/")
      .then((response) => {
        this.setState({
          users: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onDelete(id) {
    axios.delete("http://localhost:5000/user/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      users: this.state.users.filter((el) => el._id !== id),
    });
  }
  render() {
    return (
      <div>
        <h3>list of all users</h3>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Job </th>
              <th>Age</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => {
              return (
                <tr key={user._id}>
                  <th scope="row">{user._id}</th>
                  <td>{user.username}</td>
                  <td>{user.jobName}</td>

                  <td>{user.createdAt}</td>
                  <td>{user.createdAt}</td>
                  <td>{user.updatedAt}</td>
                  <td>
                    <Link
                      className="btn btn-primary m-2"
                      to={`/edit/${user._id}`}
                    >
                      Edit
                    </Link>{" "}
                    <a
                      className="btn btn-primary"
                      href="#"
                      onClick={() => this.onDelete(user._id)}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
