import { Text, View } from "react-native";

export default function DateView({ date }: { date: string }) {
  return (
    <View className="flex-row justify-end">
      <Text className="text-sm">{date}</Text>
    </View>
  );
}
