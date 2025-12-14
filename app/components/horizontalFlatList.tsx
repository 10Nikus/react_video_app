import { FlatList, Text, View } from "react-native";
import type { itemProps } from "./smallWindow";
import SmallWindow from "./smallWindow";

export default function HorizontalFlatList({
  search,
  data,
}: {
  search: string;
  data: itemProps[];
}) {
  return (
    <View>
      <View className="px-8 h-80">
        <View
          className="flex-row justify-between items-center mt-6 "
          style={{ marginTop: 40 }}
        >
          <Text className="font-poppins text-black font-semibold text-2xl  mb-4">
            {search}
          </Text>
          <Text className="font-poppins text-spaceIndigo underline text-sm mb-4">
            Show more
          </Text>
        </View>
        <FlatList
          horizontal={true}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <SmallWindow item={item} />}
        />
      </View>
      <View className="bg-black h-1 w-full" />
    </View>
  );
}
