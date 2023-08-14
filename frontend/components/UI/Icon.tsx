import {
  NativeSyntheticEvent,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
  NativeTouchEvent,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default ({
  onPress,
  style,
  ...iconStyles
}: {
  onPress?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
  style?: StyleProp<ViewStyle>;
  size: number;
  color?: string;
  name: keyof typeof Ionicons.glyphMap;
}) => {
  if (!onPress) {
    return (
      <View style={style}>
        <Ionicons {...iconStyles} />
      </View>
    );
  }
  return (
    <Pressable onPress={onPress} style={style}>
      <Ionicons {...iconStyles} />
    </Pressable>
  );
};
