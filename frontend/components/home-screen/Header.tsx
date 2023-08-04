import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Fonts } from "../../constants/constants";
import { useContext } from "react";
import { AuthContext } from "../../store/auth/AuthContext";

export default () => {
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerItem}>
        <Text style={styles.headerTitle}>Welcome Back</Text>
        <Text style={styles.headerName}>{user?.name}</Text>
      </View>
      <View style={styles.headerItem}>
        <Image
          source={require("../../assets/images/home-screen/persona.png")}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 16,
  },
  headerTitle: {
    fontFamily: Fonts.regular,
    color: Colors.black_500,
    fontSize: 12,
  },
  headerName: {
    color: Colors.black_700,
    fontSize: 18,
    fontFamily: Fonts.medium,
  },
  headerItem: {
    height: "auto",
  },
});
