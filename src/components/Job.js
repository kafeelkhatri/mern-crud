import React, { Component } from "react";
import axios from "axios";

export default class Job extends Component {
  constructor(props) {
    super(props);
    this.onChangeJobName = this.onChangeJobName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      jobName: "",
    };
  }
  onChangeJobName(e) {
    this.setState({
      jobName: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const job = {
      jobName: this.state.jobName,
    };

    console.log(job);

    axios
      .post("http://localhost:5000/job/add", job)
      .then((res) => console.log(res.data));

    this.setState({
      jobName: "",
    });
  }

  render() {
    return (
      <div>
        <h3>Add New Job</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Job Name: </label>
            <input
              type="text"
              value={this.state.jobName}
              onChange={this.onChangeJobName}
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
