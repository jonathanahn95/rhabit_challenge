import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
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
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.update("fname")}
          className="session-form-email-input"
          type="text"
          value={this.state.fname}
        />
        <div className="session-form-password">First Name:</div>
        <input
          onChange={this.update("lname")}
          className="session-form-email-input"
          type="text"
          value={this.state.lname}
        />
        <div className="session-form-password">Last Name:</div>
        <input
          onChange={this.update("title")}
          className="session-form-email-input"
          type="text"
          value={this.state.title}
        />
        <div className="session-form-password">Title:</div>
        <input
          onChange={this.update("manager_id")}
          className="session-form-email-input"
          type="text"
          value={this.state.manager_id}
        />
        <div className="session-form-password">Manager:</div>
        <input
          className="session-form-submit"
          type="submit"
          value={this.props.formType}
        />
      </form>
    );
  }
}

export default withRouter(Form);
