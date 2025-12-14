import { FlatList, Text, View } from "react-native";
import type { itemProps } from "../types/newItemProps";
import SmallWindow from "./smallWindow";
import { useVideoSearch } from "../hooks/useVideoSearch";
import { router } from "expo-router";

export default function HorizontalFlatList({
  query,
  data,
}: {
  query: string;
  data: itemProps[];
}) {
  const { search } = useVideoSearch();
  return (
    <View>
      <View className="px-8 h-80">
        <View
          className="flex-row justify-between items-center mt-6 "
          style={{ marginTop: 40 }}
        >
          <Text className="font-poppins text-black font-semibold text-2xl  mb-4">
            {query}
          </Text>
          <Text
            className="font-poppins text-spaceIndigo underline text-sm mb-4"
            onPress={() => {
              search(query);
              router.push("/search");
            }}
          >
            Show more
          </Text>
        </View>
        <FlatList
          horizontal={true}
          data={data}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }) => <SmallWindow item={item} />}
        />
      </View>
      <View className="bg-black h-1 w-full" />
    </View>
  );
}
