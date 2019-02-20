import React from "react";
import { connect } from "react-redux";
import Splash from "./splash";
import { fetchAllUsers, deleteUser } from "../../actions/user_actions";

const mapStateToProps = ({ entities: { users } }) => {
  return {
    users: Object.values(users)
  };
};

const mapDispatchToPros = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    deleteUser: user => dispatch(deleteUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Splash);
