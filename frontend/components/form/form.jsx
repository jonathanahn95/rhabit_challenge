import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  handleSubmit(e) {
    e.preventDefault();
    delete this.state["manager"];
    debugger;
    this.props.action(this.state).then(this.props.history.push("/"));
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  render() {
    return (
      <div className="form-div">
        <form className="form" onSubmit={this.handleSubmit}>
          <h1>{this.props.formType}</h1>
          <div className="form-input-wrapper">
            <div className="form-title">First Name:</div>
            <input
              onChange={this.update("fname")}
              className="form-input"
              type="text"
              value={this.state.fname}
              required
            />
          </div>
          <div className="form-input-wrapper">
            <div className="form-title">Last Name:</div>
            <input
              onChange={this.update("lname")}
              className="form-input"
              type="text"
              value={this.state.lname}
              required
            />
          </div>
          <div className="form-input-wrapper">
            <div className="form-title">Title:</div>
            <input
              onChange={this.update("title")}
              className="form-input"
              type="text"
              value={this.state.title}
              required
            />
          </div>
          <div className="form-input-wrapper">
            <div className="form-title">Manager:</div>
            <input
              onChange={this.update("manager_id")}
              className="form-input"
              type="text"
              value={this.state.manager_id}
              required
            />
          </div>
          <input
            className="form-submit"
            type="submit"
            value={this.props.formType}
          />
        </form>
      </div>
    );
  }
}

export default withRouter(Form);
