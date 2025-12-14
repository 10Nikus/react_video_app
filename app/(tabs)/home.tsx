import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeHeader from "../components/homeHeader";
import HorizontalFlatList from "../components/horizontalFlatList";
import { data } from "../data/data";
export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <View className="bg-white  h-full" style={{ paddingTop: insets.top }}>
      <HomeHeader />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HorizontalFlatList query={item.name} data={item.list} />
        )}
      />
    </View>
  );
}
