import { useEffect } from "react";
import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeHeader from "../components/homeHeader";
import HorizontalFlatList from "../components/horizontalFlatList";
import { data } from "../data/data";
export default function Home() {
  const insets = useSafeAreaInsets();

  const logFullData = async () => {
    // Tutaj twoje zapytania do API, np.:
    // const response = await fetch(...);
    // const data = await response.json();

    // KLUCZOWE: Użyj JSON.stringify z wcięciami (null, 2)
    console.log(JSON.stringify(data, null, 2));
  };

  useEffect(() => {
    logFullData();
  }, []);

  return (
    <View className="bg-white  h-full" style={{ paddingTop: insets.top }}>
      <HomeHeader />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HorizontalFlatList search={item.name} data={item.list} />
        )}
      />
    </View>
  );
}
