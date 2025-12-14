import { Text } from "react-native";

export default function SortButton({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}) {
  return (
    <Text className="text-xs text-white" onPress={onPress}>
      {text}
    </Text>
  );
}
