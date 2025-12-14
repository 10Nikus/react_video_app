import { Pressable, Text } from "react-native";

export default function NavyButton({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      className="bg-spaceIndigo w-64 h-12 justify-center items-center rounded-2xl"
      onPress={onPress}
    >
      <Text className="text-white text-2xl ">{text}</Text>
    </Pressable>
  );
}
