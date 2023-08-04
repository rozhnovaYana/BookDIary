import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
import { Colors } from "../../constants/constants";

const Spinner = ({
  color = Colors.plum_500,
  size = "large",
}: ActivityIndicatorProps) => {
  return <ActivityIndicator size={size} color={color} />;
};
export default Spinner;
