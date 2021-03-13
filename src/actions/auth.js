import { firebase, googleAuthProvider } from "../firebase/firebase-condig";
import { types } from "../types/types";

export const startLoginEmail = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(1234, "Omar"));
    }, 3500);
  };
};

export const startRegisterWithEmailPassword = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({
          displayName: name,
        });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

//Action de google
export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
