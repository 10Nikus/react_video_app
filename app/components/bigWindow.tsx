import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import DateView from "./dateView";

export default function bigWindow({
  channel_name,
  title,
  upload_date,
  image,
  id,
}: {
  channel_name: string;
  title: string;
  upload_date: string;
  image: string;
  id: string;
}) {
  return (
    <Pressable
      onPress={() => {
        router.navigate({
          pathname: "/videoDetails",
          params: {
            channel_name: channel_name,
            title: title,
            id: id,
          },
        });
      }}
    >
      <View className="mb-4 w-full">
        <Image
          source={{ uri: image }}
          className="w-full h-64 rounded-2xl mb-2"
        />
        <View className="px-2">
          <Text className="font-poppins text-black text-lg mb-2">
            {channel_name}
          </Text>
          <Text className="font-poppins text-gray-600">{title}</Text>
          <DateView date={upload_date.substring(0, 10)} />
        </View>
      </View>
    </Pressable>
  );
}
