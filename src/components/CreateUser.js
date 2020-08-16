import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeJobName = this.onChangeJobName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
      jobName: "",
      age: "",
      jobs: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/job/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            jobs: response.data.map((job) => job.jobName),
            // jobName: response.data[0].jobName,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onChangeUserName(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeJobName(e) {
    this.setState({
      jobName: e.target.value,
    });
  }
  onChangeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const users = {
      username: this.state.username,
      jobName: this.state.jobName,
      age: this.state.age,
    };

    axios
      .post("http://localhost:5000/user/add", users)
      .then((res) => console.log(res.data));

    this.setState({
      username: "",
      jobName: "",
      age: "",
    });
    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Add user</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>User Name:</label>
            <input
              type="text"
              className="form-control"
              onChange={this.onChangeUserName}
              value={this.state.username}
            />
          </div>
          <div className="form-group">
            <label>Select Job</label>
            <select
              className="form-control"
              value={this.state.jobName}
              onChange={this.onChangeJobName}
            >
              <option></option>
              {this.state.jobs.map(function (job) {
                return (
                  <option value={job} key={job}>
                    {job}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              value={this.state.age}
              onChange={this.onChangeAge}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Job"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
