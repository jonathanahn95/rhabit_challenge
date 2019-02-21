import {
  RECEIVE_ALL_USERS,
  RECEIVE_USER,
  REMOVE_USER
} from "../actions/user_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_USER:
      return action.users;
    case REMOVE_USER:
      return action.users;
    default:
      return state;
  }
};
