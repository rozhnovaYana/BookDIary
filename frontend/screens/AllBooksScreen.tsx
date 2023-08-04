import axios from "axios";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import BooksList from "../components/books-screen/BooksList";
import Spinner from "../components/UI/Spinner";
import { Colors, Fonts } from "../constants/constants";
import useHttpRequest from "../hooks/http-hook";

const BooksScreen = () => {
  const [books, setBooks] = useState([]);
  const { error, loading, sendHttp, onClearError } = useHttpRequest();
  useEffect(() => {
    (async () => {
      try {
        const response = await sendHttp("http://10.8.0.20:5000/api/books/");
        console.log(response)
        setBooks(response.books);
      } catch (err: any) {
      } finally {
      }
    })();
  }, [sendHttp]);
  if (loading) {
    return (
      <View style={[styles.wrapper, styles.spinner]}>
        <Spinner />
      </View>
    );
  }
  if (books?.length <= 0) {
    return <Text style={styles.emptyText}>No books found</Text>;
  }
  return (
    <View style={styles.wrapper}>
      <BooksList books={books} />
    </View>
  );
};
export default BooksScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  spinner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    color: Colors.black_600,
    fontSize: 16,
    marginTop: 10,
    fontFamily: Fonts.regular,
  },
});
