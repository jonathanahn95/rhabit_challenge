import React from "react";
import { connect } from "react-redux";
import Form from "./form";
import { addUser } from "../../actions/user_actions";

const msp = (state, ownProps) => {
  const greeting = "Add user";
  const user = {
    title: "",
    fname: "",
    lname: "",
    manager_id: ""
  };
  const formType = "Add User";

  return {
    greeting,
    user,
    formType
  };
};

const mdp = dispatch => {
  return {
    action: user => dispatch(addUser(user))
  };
};

export default connect(
  msp,
  mdp
)(Form);
