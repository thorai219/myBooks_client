import { useSelector } from "react-redux";
import "./books-list.styles.css";

const BooksList = () => {
  const books = useSelector((st) => st.books);

  console.log(books);

  return (
    <div className="container">
      <h1>Book list</h1>
      <div className="books-container">
        {books &&
          books.new.books.map((book) => (
            <div className="book-container" key={book.isbn13}>
              <div className="book-cover-container">
                <img src={book.image} alt="book cover images" />
              </div>
              <div className="book-information">
                <h2>{book.title}</h2>
                <p>{book.price}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BooksList;
