import { Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeIcon from "../../assets/icons/home-icon.svg";
import HomeHeader from "../components/homeHeader";

export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <View className="bg-white px-8 h-full" style={{ paddingTop: insets.top }}>
      <HomeHeader />
      <Text className="font-poppins text-black font-semibold text-2xl mb-4">
        Home Screen
      </Text>
      <HomeIcon width={100} height={100} color="black" />
    </View>
  );
}
