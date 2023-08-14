import { StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { BooksNavigator } from "../navigation/types";
import NotFound from "../components/UI/NotFound";
import BookItem from "../components/book-details-screen/BookItem";

type BookDetailsScreenProps = NativeStackScreenProps<
  BooksNavigator,
  "BookDetailsScreen"
>;
const BookDetailsScreen = () => {
  const route = useRoute<BookDetailsScreenProps["route"]>();
  const item = route.params.item;
  if (!item) {
    return <NotFound>Books were not found</NotFound>;
  }
  return <BookItem item={item} />;
};

export default BookDetailsScreen;

const styles = StyleSheet.create({});
