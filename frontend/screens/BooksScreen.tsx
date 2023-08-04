import { View, StyleSheet } from "react-native";

import BooksNavigator from "../navigation/BooksNavigator";

export default () => {
  return (
    <View style={styles.wrapper}>
      <BooksNavigator />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 5,
  },
});
