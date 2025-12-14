import { Image, Text, View } from "react-native";
import DateView from "./dateView";
import { itemProps } from "../types/newItemProps";

export default function SmallWindow({ item }: { item: itemProps }) {
  return (
    <View className="w-44 h-40 mr-5">
      <Image
        source={{ uri: item.snippet.thumbnails.high.url }}
        className="w-44 h-32 rounded-lg"
      />
      <Text className="font-poppins text-sm">{item.snippet.title}</Text>
      <DateView date={item.snippet.publishedAt} />
    </View>
  );
}
