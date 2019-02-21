import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";

class UserNode extends React.Component {
  constructor(props) {
    super(props);
    this.renderOptions = this.renderOptions.bind(this);
  }

  renderOptions() {
    let updateOptions = (
      <div className="edit-delete">
        <Link to={`users/edit/${this.props.id}`}>
          <button className="edit">Edit</button>
        </Link>
        <button
          className="delete"
          onClick={() => this.props.deleteUser(this.props.id)}
        >
          Remove
        </button>
      </div>
    );
    if (this.props.title === "CEO") {
      updateOptions = <div className="ceo-edit">Cant edit CEO</div>;
    }

    return updateOptions;
  }

  render() {
    return (
      <li className="node-wrapper">
        <div className="node-div-wrapper">
          <div
            className="node-div"
            onClick={() => this.props.fetchUsers(this.props.id)}
          >
            {this.props.fname +
              " " +
              this.props.lname +
              " /  " +
              this.props.title +
              ` / Employee ID: ${this.props.id}`}
          </div>
          {this.renderOptions()}
        </div>
        {this.props.children}
      </li>
    );
  }
}

export default withRouter(UserNode);
