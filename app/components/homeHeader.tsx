import { View } from "react-native";
import SettingIcon from "../../assets/icons/settings-icon.svg";
import SearchBox from "./searchBox";
import { router } from "expo-router";

export default function HomeHeader() {
  const openSettings = () => {
    router.navigate("/settings");
  };

  return (
    <View className="flex-row items-center gap-4 mb-4">
      <SearchBox />
      <SettingIcon
        width="32"
        height="32"
        color="black"
        onPress={openSettings}
      />
    </View>
  );
}
