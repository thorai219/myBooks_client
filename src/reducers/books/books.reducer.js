import { NEW_BOOKS } from "./books.types";

export const books = (state = null, action) => {
  switch (action.type) {
    case NEW_BOOKS:
      return {
        ...state,
        new: action.data,
      };

    default:
      return state;
  }
};
