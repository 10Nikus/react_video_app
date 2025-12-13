import { Text, View } from "react-native";
import "./globals.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-coolGrey">Old font</Text>
      <Text className="font-poppins text-spaceIndigo">
        New font applied with Poppins!
      </Text>
    </View>
  );
}
