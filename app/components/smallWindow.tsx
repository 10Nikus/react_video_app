import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { itemProps } from "../types/newItemProps";
import DateView from "./dateView";

export default function SmallWindow({ item }: { item: itemProps }) {
  return (
    <Pressable
      onPress={() => {
        router.navigate({
          pathname: "/videoDetails",
          params: {
            channel_name: item.snippet.channelTitle,
            title: item.snippet.title,
            id: item.id.videoId,
          },
        });
      }}
    >
      )
      <View className="w-44 h-40 mr-5">
        <Image
          source={{ uri: item.snippet.thumbnails.high.url }}
          className="w-44 h-32 rounded-lg"
        />
        <Text className="font-poppins text-sm">{item.snippet.title}</Text>
        <DateView date={item.snippet.publishedAt.substring(0, 10)} />
      </View>
    </Pressable>
  );
}
