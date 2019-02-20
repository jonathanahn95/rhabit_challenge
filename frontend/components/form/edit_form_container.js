import React from "react";
import { connect } from "react-redux";
import Form from "./form";
import { addUser, fetchUser } from "../../actions/user_actions";
import { findUser } from "../../reducers/selector";
const msp = (state, ownProps) => {
  const greeting = "Add user";
  const userId = parseInt(ownProps.match.params.id);
  const formType = "Edit User";

  const user = findUser(state.entities.users, userId);
  return {
    greeting,
    userId,
    user,
    formType
  };
};

const mdp = dispatch => {
  return {
    action: user => dispatch(addUser(user)),
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(
  msp,
  mdp
)(Form);
