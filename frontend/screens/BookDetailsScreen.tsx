import { Text, View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { BooksNavigator } from "../navigation/types";
import Title from "../components/UI/Title";
type BookDetailsScreenProps = NativeStackScreenProps<
  BooksNavigator,
  "BookDetailsScreen"
>;
const BookDetailsScreen = () => {
  const route = useRoute<BookDetailsScreenProps["route"]>();
  const item = route.params.item;
  if (!item || true) {
    return (
      <View style={styles.wrapper}>
        <Title>Books was not found</Title>
      </View>
    );
  }
  return <Text>BooksDetails</Text>;
};

export default BookDetailsScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
