import { View, StyleSheet, TextInputProps } from "react-native";
import PressableIcon from "./Icon";
import Input from "./Input";
import { Colors, Fonts } from "../../constants/constants";

export default (props: TextInputProps) => {
  return (
    <View style={styles.wrapper}>
      <Input
        textInputWrapperStyles={styles.inputWrapper}
        style={styles.input}
        placeholder="Search a book..."
        {...props}
      >
        <PressableIcon
          style={styles.searchIcon}
          name="search-outline"
          size={18}
        />
      </Input>
      <View style={styles.sortingOptions}>
        <PressableIcon name="options" color="#fff" size={18} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
  inputWrapper: {
    flex: 1,
    marginRight: 30,
    borderRadius: 16,
    elevation: 2,
    shadowColor: "rgba(136, 14, 212, 0.08)",
    shadowOffset: { width: 2, height: 6 },
    shadowRadius: 2,
    borderWidth: 0,
    paddingLeft: 56,
    paddingRight: 16,
    backgroundColor: "#Fff",
  },
  input: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: Fonts.medium,
    paddingVertical: 12,
  },
  searchIcon: {
    position: "absolute",
    left: 14,
  },
  sortingOptions: {
    backgroundColor: Colors.plum_500,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    padding: 13,
  },
});
