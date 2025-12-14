import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchHeader from "../components/searchHeader";
import SearchView from "../components/searchView";
import { useVideoStore } from "../data/store";

export default function search() {
  const insets = useSafeAreaInsets();
  const videoData = useVideoStore((state) => state.videos);
  return (
    <View
      className="bg-white px-8 mb-10 h-full"
      style={{ paddingTop: insets.top }}
    >
      <SearchHeader />
      {videoData && <SearchView search="React Native" data={videoData} />}
    </View>
  );
}
