import { useContext } from "react";
import BooksScreenWrapper from "../components/UI/books-screen/BooksScreenWrapper";
import BooksList from "../components/books-screen/BooksList";
import { BooksContext } from "../store/books/BooksContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BooksListNavigator } from "../navigation/types";

type BookScreenProps = NativeStackScreenProps<BooksListNavigator, "Library">;

const BooksScreen = () => {
  const { error, loading, books, onClearError, searchTerm } =
    useContext(BooksContext);
  const filteredBooks = books?.filter(
    (el) => el.title?.indexOf(searchTerm) > -1
  );
  return (
    <BooksScreenWrapper
      loading={loading}
      error={error}
      onClearError={onClearError}
      books={filteredBooks}
    >
      <BooksList books={filteredBooks} />
    </BooksScreenWrapper>
  );
};
export default BooksScreen;
