import React from "react";
import { connect } from "react-redux";
import Form from "./form";
import { addUser, fetchAllUsers } from "../../actions/user_actions";

const msp = (state, ownProps) => {
  const formType = "Add User";
  const user = {
    title: "",
    fname: "",
    lname: "",
    manager_id: ""
  };
  return {
    user,
    formType
  };
};

const mdp = dispatch => {
  return {
    action: user => dispatch(addUser(user)),
    fetchAllUsers: userId => dispatch(fetchAllUsers(userId))
  };
};

export default connect(
  msp,
  mdp
)(Form);
