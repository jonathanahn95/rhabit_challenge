import React from "react";
import { withRouter } from "react-router-dom";
import merge from "lodash/merge";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <ul className="header-wrapper">
        <li className="rhabit">rhabit</li>
        <div className="header-li-wrapper">
          <Link className="link" to="/">
            <li className="view-all" onClick={() => this.props.fetchAllUsers()}>
              View All
            </li>
          </Link>
          <Link className="link" to="/users/new">
            <li>Add User</li>
          </Link>
        </div>
      </ul>
    );
  }
}

export default withRouter(Header);
