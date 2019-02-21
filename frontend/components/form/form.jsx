import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import HeaderContainer from "../header/header_container";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createOptions = this.createOptions.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.id !== nextProps.user.id) {
      this.setState({
        id: nextProps.user.id,
        fname: nextProps.user.fname,
        lname: nextProps.user.lname,
        title: nextProps.user.title,
        manager_id: nextProps.user.manager_id
      });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(this.props.history.push("/"));
  }

  update(field) {
    return e => {
      debugger;
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  createOptions() {
    return this.props.users.map((el, i) => (
      <option value={`${el.id}`}>{el.fname + " " + el.lname}</option>
    ));
  }

  render() {
    let managerId;
    if (this.state.manager) {
      managerId = this.state.manager.id;
    }
    return (
      <div className="form-div">
        <HeaderContainer />
        <form className="form" onSubmit={this.handleSubmit}>
          <h1 className="h1"> {this.props.formType}</h1>
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
            <div className="form-title">
              <p>Manager:</p>
            </div>
            <select
              className="form-input"
              onChange={this.update("manager_id")}
              value={this.state.manager_id}
            >
              <option>Select manager</option>
              {this.createOptions()}
            </select>
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
