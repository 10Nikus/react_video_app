import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeHeader from "../components/homeHeader";
import { videoData } from "../data/data";
import VerticalFlatList from "../components/horizontalFlatList";

export default function Home() {
  const insets = useSafeAreaInsets();
  const names = ["React Native", "React", "JavaScript", "TypeScript"];
  return (
    <View className="bg-white  h-full" style={{ paddingTop: insets.top }}>
      <HomeHeader />
      <FlatList
        data={names}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <VerticalFlatList search={item} data={videoData.videos} />
        )}
      />
    </View>
  );
}
