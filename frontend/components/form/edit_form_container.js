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
  let user = findUser(state.entities.users, userId);
  if (user.manager) {
    user["manager_id"] = user.manager.id;
    delete user["manager"];
    const userSubs = getSubordinates(user);
    users = getUsers(
      Object.values(state.entities.users),
      parseInt(ownProps.match.params.id)
    );

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
