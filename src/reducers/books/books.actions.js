import * as API from "../../api";

import { NEW_BOOKS, BOOKS_BY_QUERY } from "./books.types";

export const newBooks = () => async (dispatch) => {
  try {
    const { data } = await API.fetchNewReleases();

    dispatch({ type: NEW_BOOKS, data });
  } catch (e) {
    console.log(e);
  }
};
