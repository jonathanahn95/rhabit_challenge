import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      fname: "",
      lname: "",
      manager_id: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    this.props.action(this.state);
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
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.update("fname")}
          className="session-form-email-input"
          type="text"
        />
        <div className="session-form-password">First Name:</div>
        <input
          onChange={this.update("lname")}
          className="session-form-email-input"
          type="text"
        />
        <div className="session-form-password">Last Name:</div>
        <input
          onChange={this.update("title")}
          className="session-form-email-input"
          type="text"
        />
        <div className="session-form-password">Title:</div>
        <input className="session-form-submit" type="submit" value="Add" />
      </form>
    );
  }
}

export default withRouter(Form);
