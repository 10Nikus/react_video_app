import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function videoDetails() {
  const insets = useSafeAreaInsets();
  const { id, title, channel_name } = useLocalSearchParams();

  return (
    <View className="px-8" style={{ paddingTop: insets.top }}>
      <Text className="font-poppins text-lg font-bold">
        Video Details Screen
      </Text>
      <Text className="font-poppins text-sm">Channel Name: {channel_name}</Text>
      <Text className="font-poppins text-sm">Title: {title}</Text>
      <Text className="font-poppins text-sm">ID: {id}</Text>
    </View>
  );
}
