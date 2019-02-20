import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import { fetchAllUsers } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToPros = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Header);
