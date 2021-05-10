import { useSelector } from "react-redux";
import "./books-list.styles.css";

const BooksList = () => {
  const books = useSelector((st) => st.books);

  console.log(books);

  return (
    <div className="container">
      <div className="row">
        {books &&
          books.new.books.map((book) => (
            <div className="col book-container" key={book.isbn13}>
              <div>
                <img
                  src={book.image}
                  alt="book cover images"
                  style={{
                    width: "200px",
                  }}
                />
              </div>
              <div>
                <p>{book.title}</p>
                <p>{book.price}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BooksList;
