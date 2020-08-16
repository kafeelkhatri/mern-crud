import React, { Component } from "react";
import axios from "axios";

export default class EditUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
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
      .get("http://localhost:5000/user/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          jobName: response.data.jobName,
          age: response.data.age,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/job/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            jobs: response.data.map((job) => job.jobName),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeUsername(e) {
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

    const user = {
      username: this.state.username,
      jobName: this.state.jobName,
      age: this.state.age,
    };

    console.log(user);

    axios
      .post(
        "http://localhost:5000/user/update/" + this.props.match.params.id,
        user
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Edit Exercise Log</h3>
        {/* <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Job name: </label>
            <select
              required
              className="form-control"
              value={this.state.jobName}
              onChange={this.onChangeJobName}
            >
              {this.state.jobs.map(function (job) {
                return (
                  <option key={job} value={job}>
                    {job}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>User Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label>Age: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeAge}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Edit Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form> */}
      </div>
    );
  }
}
