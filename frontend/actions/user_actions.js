import * as UserApiUtil from "../util/user_api_util";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";

export const receiveAllUsers = users => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

export const receiveUser = users => {
  return {
    type: RECEIVE_USER,
    users
  };
};

export const removeUser = users => ({
  type: REMOVE_USER,
  users
});

export const fetchAllUsers = () => {
  return dispatch => {
    return UserApiUtil.fetchAllUsers().then(users => {
      return dispatch(receiveAllUsers(users));
    });
  };
};

export const fetchUser = id => {
  return dispatch => {
    return UserApiUtil.fetchUser(id).then(user => {
      return dispatch(receiveUser(user));
    });
  };
};

export const addUser = user => {
  return dispatch => {
    return UserApiUtil.addUser(user).then(users => {
      return dispatch(receiveUser(users));
    });
  };
};

export const deleteUser = userId => {
  return dispatch => {
    return UserApiUtil.deleteUser(userId).then(users => {
      return dispatch(removeUser(users));
    });
  };
};
