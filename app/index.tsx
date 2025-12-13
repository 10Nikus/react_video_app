import { Image, Linking, Pressable, Text, View } from "react-native";
import "./globals.css";

export default function Index() {
  const openTerms = () => {
    Linking.openURL("https://example.com/terms");
  };

  return (
    <View className="flex-1 items-center justify-center bg-coolGrey">
      <Image source={require("../assets/logo.png")} />
      <Image source={require("../assets/app-icon.png")} />
      <Text className="font-poppins text-white font-semibold text-2xl">
        Welcome to the best YouTube-based learning application.
      </Text>
      <Pressable className="bg-spaceIndigo w-80 h-12 justify-center items-center rounded-2xl ">
        <Text className="text-white">Login as guest</Text>
      </Pressable>
      <View className="px-4 py-4">
        <Text className="text-white text-center ">
          By continuing you agree with
          <Text className="text-blue-500 underline" onPress={openTerms}>
            {" "}
            Terms and Conditions
          </Text>
          and
          <Text className="text-blue-500 underline" onPress={openTerms}>
            {" "}
            Privacy Policy
          </Text>
        </Text>
      </View>
    </View>
  );
}
