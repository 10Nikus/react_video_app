import { TextInput, View } from "react-native";
import SearchIcon from "../../assets/icons/search-icon.svg";

export default function SearchBox() {
  return (
    <View className="border rounded-2xl flex-row items-center flex-1 px-4">
      <SearchIcon width="24" height="24" color="black" />
      <TextInput className="flex-1 h-12  px-4" />
    </View>
  );
}
