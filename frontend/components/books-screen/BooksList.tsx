import { FlatList, StyleSheet, Text, View } from "react-native";
import { Book } from "../../types/book";
import BookItem from "./Book";

const BooksList = ({ books }: { books: Book[] }) => {
  return (
    <View>
      <FlatList
        data={books}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <BookItem item={item} />}
      />
    </View>
  );
};
export default BooksList;

const styles = StyleSheet.create({});
