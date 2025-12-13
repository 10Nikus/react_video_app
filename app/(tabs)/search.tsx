import { Text, View } from "react-native";
import SearchIcon from "../../assets/icons/search-icon.svg";
import SearchHeader from "../components/searchHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function search() {
  const insets = useSafeAreaInsets();

  return (
    <View className="bg-white px-8 h-full" style={{ paddingTop: insets.top }}>
      <SearchHeader />
      <Text className="font-poppins text-white font-semibold text-2xl">
        Search Screen
      </Text>
      <SearchIcon width={100} height={100} color="black" />
    </View>
  );
}
