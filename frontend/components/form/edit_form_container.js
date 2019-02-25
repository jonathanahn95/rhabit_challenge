import React from "react";
import { connect } from "react-redux";
import Form from "./form";
import { updateUser, fetchAllUsers } from "../../actions/user_actions";
import {
  findUser,
  getUsers,
  getSubordinates,
  getFilteredUsers
} from "../../reducers/selector";

const msp = (state, ownProps) => {
  const userId = parseInt(ownProps.match.params.id);
  const formType = "Edit User";
  let users = [];
  let userNames = [];
  /// user selector to find user in state
  let user = findUser(state.entities.users, userId);
  debugger;

  /// once we have a user we have to delete set a new key, manager_id, to the managers id
  /// we want to delete the manager key because when we send it back to the back end, we only permift a manager_id
  if (user.manager) {
    user["manager_id"] = user.manager.id;
    delete user["manager"];
    /// grab all the users direct_reports in the form of an array
    const userSubs = getSubordinates(user);
    /// filter out the current user's info in the users slice of state
    users = getUsers(
      Object.values(state.entities.users),
      parseInt(ownProps.match.params.id)
    );

    /// the function getFilteredUsers will filter out all the subordinates of the current user in the overall users array
    userNames = getFilteredUsers(users, userSubs);
  }
  if (user.toString() === [].toString()) {
    user = {};
  }

  return {
    users: userNames,
    userId,
    user,
    formType
  };
};

const mdp = dispatch => {
  return {
    action: user => dispatch(updateUser(user)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(
  msp,
  mdp
)(Form);
