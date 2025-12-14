import { Image, Text, View } from "react-native";
import DateView from "./dateView";
import { itemProps } from "../types/itemProps";

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
