import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import BigWindow from "../components/bigWindow";
import NavyButton from "./navyButton";
import type { itemProps } from "./../types/newItemProps";
import SortButton from "./sortButton";

export default function SearchView({
  search,
  data,
}: {
  search: string;
  data: itemProps[];
}) {
  const [sortBy, setSortBy] = useState("Most Popular");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <View>
        <View className="flex-row">
          <Text className=" text-black text-sm mb-4">
            {data.length} results found for
          </Text>
          <Text className="font-bold text-black text-sm mb-4"> {search}</Text>
        </View>
        <View className="w-full flex-row items-center justify-end mb-4">
          <Text>sort by:</Text>
          <Text className="font-bold" onPress={() => setShowModal(true)}>
            {" "}
            {sortBy}
          </Text>
        </View>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.videoId}
        renderItem={({ item }) => (
          <BigWindow
            channel_name={item.snippet.channelTitle}
            title={item.snippet.title}
            upload_date={item.snippet.publishedAt}
            image={item.snippet.thumbnails.high.url}
          />
        )}
      />

      {showModal && (
        <View className="absolute inset-0 flex items-center justify-center bg-black/90">
          <View className="flex justify-between items bg-coolGrey h-96 w-80 rounded-2xl p-4 pl-8">
            <View className="h-40 flex justify-evenly ">
              <Text className="text-2xl text-white">Sort records by:</Text>
              <SortButton
                text="Uplodad date: Oldest"
                onPress={() => {
                  setSortBy("Oldest");
                }}
              />
              <SortButton
                text="Upload date: Newest"
                onPress={() => {
                  setSortBy("Latest");
                }}
              />
              <SortButton
                text="Most Popular"
                onPress={() => {
                  setSortBy("Most Popular");
                }}
              />
            </View>
            <View className="max-w-12 ">
              <NavyButton text="Confirm" onPress={() => setShowModal(false)} />
            </View>
          </View>
        </View>
      )}
    </>
  );
}
