import { TextInput, View } from "react-native";
import SearchIcon from "../../assets/icons/search-icon.svg";
import { useState } from "react";
import { useVideoSearch } from "../hooks/useVideoSearch";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const { search } = useVideoSearch();

  return (
    <View className="border rounded-2xl flex-row items-center flex-1 px-4">
      <SearchIcon width="24" height="24" color="black" />
      <TextInput
        onChange={(e) => setQuery(e.nativeEvent.text)}
        onSubmitEditing={() => {
          search(query);
          setQuery("");
        }}
        className="flex-1 h-12  px-4"
        value={query}
      />
    </View>
  );
}
