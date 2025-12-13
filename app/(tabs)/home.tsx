import { Text, View } from "react-native";
import HomeIcon from "../../assets/icons/home-icon.svg";
export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="font-poppins text-white font-semibold text-2xl">
        Home Screen
      </Text>
      <HomeIcon width={100} height={100} />
    </View>
  );
}
