import { types } from "../types/types";

export const startLoginEmail = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(1234, "Omar"));
    }, 3500);
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});
