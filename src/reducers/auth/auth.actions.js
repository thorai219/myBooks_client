import * as API from "../../api";
import { AUTH } from "./auth.types";

export const signIn = (userData, history) => async (dispatch) => {
  try {
    const { data } = await API.signIn(userData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (e) {
    console.log(e);
  }
};

export const signUp = (userData, history) => async (dispatch) => {
  try {
    const { data } = await API.signUp(userData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (e) {
    console.log(e.message);
  }
};
