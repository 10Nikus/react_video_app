import { TextInput, View } from "react-native";
import SearchIcon from "../../assets/icons/search-icon.svg";
import { useState } from "react";
import { useVideoSearch } from "../hooks/useVideoSearch";
import { router } from "expo-router";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const { search } = useVideoSearch();

  return (
    <View className="border rounded-2xl flex-row items-center flex-1 px-4">
      <SearchIcon width="24" height="24" color="black" />
      <TextInput
        onChangeText={(text) => setQuery(text)}
        onSubmitEditing={() => {
          search(query);
          setQuery("");
          router.push("/search");
        }}
        className="flex-1 h-12  px-4"
        value={query}
        returnKeyType="search"
        placeholder="Search videos..."
      />
    </View>
  );
}
