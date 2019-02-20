import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import AddFormContainer from "../form/add_form_container";
import HeaderContainer from "../header/header_container";
import UserNode from "../user_node/user_node";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  renderHierarchy(data) {
    const renderSubs = directReports => {
      if (directReports.length > 0) {
        return <ul>{this.renderHierarchy(directReports)}</ul>;
      }
    };

    return data.map((userNode, index) => {
      return (
        <UserNode
          id={userNode.id}
          key={userNode.id}
          fname={userNode.fname}
          lname={userNode.lname}
          deleteUser={this.props.deleteUser}
          fetchUsers={this.props.fetchUsers}
        >
          {renderSubs(userNode.direct_reports)}
        </UserNode>
      );
    });
  }

  render() {
    return (
      <main>
        <HeaderContainer />
        <div className="welcome-div">
          <div>Welcome to the organizational relationship</div>
          <div>Click on a user if would like to view their direct reports</div>
        </div>
        {this.renderHierarchy(this.props.users)}
      </main>
    );
  }
}

export default withRouter(Splash);
