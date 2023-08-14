import { Pressable, StyleSheet } from "react-native";
import { Book as BookType } from "../../types/book";
import { useNavigation } from "@react-navigation/native";
import { BooksNavigator } from "../../navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Book from "../UI/Book";

export type BookScreenNavigationProps = NativeStackScreenProps<
  BooksNavigator,
  "BooksListNavigator"
>;

const BookItem = ({ item }: { item: BookType }) => {
  const navigation = useNavigation<BookScreenNavigationProps["navigation"]>();
  const openBookDetails = () => {
    navigation.navigate("BookDetailsScreen", { item: item });
  };
  return (
    <Pressable style={styles.wrapper} onPress={openBookDetails}>
      <Book item={item} />
    </Pressable>
  );
};
export default BookItem;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 5,
  },
});
