import { FlatList, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchHeader from "../components/searchHeader";
import { videoData } from "../data/data";
import SearchView from "../components/searchView";

export default function search() {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="bg-white px-8 mb-10 h-full"
      style={{ paddingTop: insets.top }}
    >
      <SearchHeader />
      <SearchView search="React Native" data={videoData.videos} />
    </View>
  );
}
