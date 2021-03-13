import {firebase,googleAuthProvider} from "../firebase/firebase-condig";
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

//Action de google 
export const startGoogleLogin = ()=>
{
  return(dispatch)=>{
    firebase.auth().signInWithPopup(googleAuthProvider).
    then(userCredential=>{
      console.log(userCredential)
    })
  }
}
