import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";

class UserNode extends React.Component {
  render() {
    return (
      <li>
        <li>
          {this.props.name}
          <button>Edit</button>
          <button onClick={() => this.props.deleteUser(this.props.id)}>
            Remove
          </button>
          {this.props.children}
        </li>
      </li>
    );
  }
}

export default withRouter(UserNode);
