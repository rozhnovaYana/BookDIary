import { Pressable, View, Image, StyleSheet, Text } from "react-native";
import { Book } from "../../types/book";
import { Fonts } from "../../constants/constants";
import { useNavigation } from "@react-navigation/native";
import { BooksNavigator } from "../../navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type BookScreenNavigationProps = NativeStackScreenProps<
  BooksNavigator,
  "BooksListNavigator"
>;

const BookItem = ({ item }: { item: Book }) => {
  const {
    author,
    title,
    pages,
    rating: { score },
  } = item;
  const navigation = useNavigation<BookScreenNavigationProps["navigation"]>();
  const openBookDetails = () => {
    navigation.navigate("BookDetailsScreen", { item: item });
  };
  return (
    <Pressable style={styles.wrapper} onPress={openBookDetails}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={{
            uri: item.cover,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.pages}>{pages}</Text>
        {score > 0 && <Text style={styles.rating}>{score}</Text>}
      </View>
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
  imageWrapper: {
    flexBasis: "30%",
  },
  contentWrapper: {
    flex: 0,
    flexBasis: "70%",
  },
  image: {
    width: 100,
    height: 150,
    maxWidth: "100%",
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: Fonts.medium,
  },
  author: {
    fontSize: 16,
    fontFamily: Fonts.regular,
  },
  pages: {
    fontStyle: "italic",
    fontSize: 12,
  },
  rating: {},
});
