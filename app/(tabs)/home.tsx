import { Text, TextInput, View } from "react-native";
import HomeIcon from "../../assets/icons/home-icon.svg";
import SettingIcon from "../../assets/icons/settings-icon.svg";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Home() {
  const openSettings = () => {
    router.navigate("/settings");
  };

  const insets = useSafeAreaInsets();

  return (
    <View className="bg-white px-8 h-full" style={{ paddingTop: insets.top }}>
      <View className="flex-row items-center gap-4 mb-4">
        <TextInput className="border flex-1 h-12 rounded-2xl px-4" />
        <SettingIcon
          width="32"
          height="32"
          color="black"
          onPress={openSettings}
        />
      </View>
      <Text className="font-poppins text-black font-semibold text-2xl mb-4">
        Home Screen
      </Text>
      <HomeIcon width={100} height={100} color="black" />
    </View>
  );
}
