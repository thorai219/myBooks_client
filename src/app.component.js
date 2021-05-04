import { useEffect } from "react";
import Nav from "./components/nav/nav.component";
import BooksList from "./components/books-list/books-list.component";

import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newBooks } from "./reducers/books/books.actions";

import "./app.styles.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newBooks());
  }, [dispatch]);

  return (
    <div className="app-container">
      <Nav />
      <Switch>
        <Route exact path="/books">
          <BooksList />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
