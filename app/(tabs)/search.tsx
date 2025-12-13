import { FlatList, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BigWindow from "../components/bigWindow";
import SearchHeader from "../components/searchHeader";
import { videoData } from "../data/data";

export default function search() {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="bg-white px-8 mb-10 h-full"
      style={{ paddingTop: insets.top }}
    >
      <SearchHeader />
      <View>
        <View className="flex-row">
          <Text className=" text-black text-sm mb-4">
            xxx results found for
          </Text>
          <Text className="font-bold text-black text-sm mb-4"> xxx</Text>
        </View>
        <View className="w-full flex-row items-center justify-end mb-4">
          <Text>sort by </Text>
          <Text className="font-bold"> Most Popular</Text>
        </View>
      </View>

      <FlatList
        data={videoData.videos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BigWindow
            channel_name={item.channel_name}
            title={item.title}
            upload_date={item.upload_date}
          />
        )}
      />
    </View>
  );
}
