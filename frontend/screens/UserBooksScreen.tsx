import { useContext } from "react";
import BooksScreenWrapper from "../components/UI/books-screen/BooksScreenWrapper";
import BooksList from "../components/books-screen/BooksList";
import { BooksContext } from "../store/books/BooksContext";

import { AuthContext } from "../store/auth/AuthContext";

const BooksScreen = () => {
  const { books, error, loading, onClearError } = useContext(BooksContext);
  const { user } = useContext(AuthContext);

  const userBooks =
    user?._id && books.filter((el) => el.users?.indexOf(user?._id) > -1);
  return (
    <BooksScreenWrapper
      loading={loading}
      error={error}
      onClearError={onClearError}
      books={userBooks || []}
    >
      <BooksList books={userBooks || []} />
    </BooksScreenWrapper>
  );
};
export default BooksScreen;
