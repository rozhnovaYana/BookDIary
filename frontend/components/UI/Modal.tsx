import { Modal, StyleSheet, View } from "react-native";
import { Colors } from "../../constants/constants";

interface IModal {
  children?: JSX.Element | JSX.Element[];
  modalVisible: boolean;
}
export default ({ children, modalVisible }: IModal) => {
  return (
    <Modal transparent={true} animationType="fade" visible={modalVisible}>
      <View style={styles.centered}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  centered: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  modal: {
    backgroundColor: Colors.plum_150,
    shadowColor: Colors.plum_500,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: "auto",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 30,
    margin: 20,
    width: "70%",
    maxWidth: 400,
  },
  modalContent: {
    justifyContent: "center",
  },
});
