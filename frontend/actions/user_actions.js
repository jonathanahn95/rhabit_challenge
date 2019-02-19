import * as UserApiUtil from "../util/user_api_util";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const receiveAllUsers = payload => {
  return {
    type: RECEIVE_ALL_USERS,
    payload
  };
};

export const fetchAllUsers = () => {
  return dispatch => {
    return UserApiUtil.fetchAllUsers().then(users => {
      debugger;
      return dispatch(receiveAllUsers(users));
    });
  };
};
