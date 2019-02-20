import React from "react";
import { connect } from "react-redux";
import Form from "./form";
import { updateUser, fetchAllUsers } from "../../actions/user_actions";
import { findUser } from "../../reducers/selector";

const msp = (state, ownProps) => {
  const userId = parseInt(ownProps.match.params.id);
  const formType = "Edit User";
  let user = findUser(state.entities.users, userId);
  user["manager_id"] = user.manager.id;
  debugger;
  delete user["manager"];
  debugger;
  if (user.toString() === [].toString()) {
    user = {};
  }

  return {
    userId,
    user,
    formType
  };
};

const mdp = dispatch => {
  return {
    action: user => dispatch(updateUser(user)),
    fetchAllUsers: userId => dispatch(fetchAllUsers(userId))
  };
};

export default connect(
  msp,
  mdp
)(Form);
