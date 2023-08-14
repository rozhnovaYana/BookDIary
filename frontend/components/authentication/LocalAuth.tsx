import { StyleSheet, Image, Text, Pressable } from "react-native";

import { Fonts } from "../../constants/constants";

export default () => {
  const localAuth = async () => {};
  return (
    <Pressable style={styles.faceIDWrapper} onPress={localAuth}>
      <Image
        style={styles.faceIDImg}
        source={require("../../assets/images/auth/face-id.png")}
      />
      <Text style={styles.faceIDTitle}>Use Face ID</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  faceIDWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 28,
  },
  faceIDImg: {
    width: 40,
    height: 40,
  },
  faceIDTitle: {
    color: "#1C1B1E",
    fontSize: 14,
    fontFamily: Fonts.medium,
    marginTop: 5,
  },
});
