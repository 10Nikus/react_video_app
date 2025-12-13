import { View, Image, Text } from "react-native";
import DateView from "./dateView";

interface itemProps {
  id: number;
  title: string;
  view_count: number;
  description: string;
  upload_date: string;
  channel_name: string;
  like_count: number;
}

export default function SmallWindow({ item }: { item: itemProps }) {
  return (
    <View className="w-44 h-40 mr-5">
      <Image
        source={require("../../assets/video/puppy.webp")}
        className="w-44 h-32 rounded-lg"
      />
      <Text className="font-poppins text-sm">{item.title}</Text>
      <DateView date={item.upload_date} />
    </View>
  );
}

export type { itemProps };
