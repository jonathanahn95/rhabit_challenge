import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import AddFormContainer from "../form/add_form_container";
import UserNode from "../user_node/user_node";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  list(data) {
    const children = items => {
      if (items) {
        return <ul>{this.list(items)}</ul>;
      }
    };

    return data.map((node, index) => {
      return (
        <UserNode
          id={node.id}
          key={node.id}
          name={node.name}
          deleteUser={this.props.deleteUser}
        >
          {children(node.direct_reports)}
        </UserNode>
      );
    });
  }

  render() {
    return (
      <main>
        <h1>Rhabit</h1>
        <AddFormContainer />
        {this.list(this.props.users)}
      </main>
    );
  }
}

export default withRouter(Splash);
