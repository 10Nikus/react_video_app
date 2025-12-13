import { Text, View } from "react-native";
import SearchIcon from "../../assets/icons/search-icon.svg";

export default function search() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="font-poppins text-white font-semibold text-2xl">
        Search Screen
      </Text>
      <SearchIcon width={100} height={100} color="black" />
    </View>
  );
}
