import { combineReducers } from "redux";
import { auth } from "./auth/auth.reducer";
import { books } from "./books/books.reducer";

export default combineReducers({
  auth,
  books,
});
