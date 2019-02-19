import React from "react";
import { connect } from "react-redux";
import Splash from "./splash";
import { fetchAllUsers } from "../../actions/user_actions";

const mapStateToProps = state => {
  return {
    debugger
  };
};

const mapDispatchToPros = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Splash);
