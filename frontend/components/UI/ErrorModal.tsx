import { View, StyleSheet, Text } from "react-native";
import Button from "./Button";
import Modal from "./Modal";

import { Colors, Fonts } from "../../constants/constants";

const ErrorModal = ({
  error,
  onClearError,
}: {
  error: string;
  onClearError: () => void;
}) => {
  return (
    <View style={[styles.modal, styles.errorModal]}>
      <Modal modalVisible={true}>
        <View style={styles.errorTextHeaderView}>
          <Text style={styles.errorTextHeader}>Something went wrong...</Text>
        </View>
        <View style={styles.errorTextHeaderView}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
        <Button
          onPress={onClearError}
          style={styles.closeModalBtn}
          mode="regular"
        >
          Ok
        </Button>
      </Modal>
    </View>
  );
};

export default ErrorModal;

const styles = StyleSheet.create({
  modal: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.plum_100,
    height: "100%",
    flex: 1,
  },
  errorModal: {
    backgroundColor: "transparent",
  },
  errorTextHeaderView: {
    marginBottom: 5,
  },
  errorTextHeader: {
    fontFamily: Fonts.medium,
    fontSize: 18,
  },
  errorText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
  },
  closeModalBtn: {
    alignItems: "flex-end",
    alignSelf: "flex-end",
  },
});
