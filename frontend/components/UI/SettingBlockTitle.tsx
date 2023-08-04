import { StyleSheet, Text, View } from "react-native";
import { Colors, Fonts } from "../../constants/constants";

export default ({ children }: { children: string }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 12,
  },
  text: {
    color: Colors.plum_500,
    fontFamily: Fonts.regular,
    fontSize: 12,
    textTransform: 'uppercase'
  },
});
