import { View } from "react-native";
import SearchBox from "./searchBox";

export default function SearchHeader() {
  return (
    <View className="flex-row items-center gap-4 mb-4">
      <View className=" rounded-2xl flex-row items-center flex-1 px-4">
        <SearchBox />
      </View>
    </View>
  );
}
