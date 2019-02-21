import React from "react";
import { connect } from "react-redux";
import Form from "./form";
import { addUser, fetchAllUsers } from "../../actions/user_actions";
import { getAllUsers } from "../../reducers/selector";

const msp = (state, ownProps) => {
  const formType = "Add User";
  const user = {
    title: "",
    fname: "",
    lname: "",
    manager_id: ""
  };
  const users = getAllUsers(Object.values(state.entities.users));
  return {
    users: users,
    user,
    formType
  };
};

const mdp = dispatch => {
  return {
    action: user => dispatch(addUser(user)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(
  msp,
  mdp
)(Form);
