import { Image, Linking, Pressable, Text, View } from "react-native";
import { router } from "expo-router";

export default function Index() {
  const openTerms = () => {
    Linking.openURL("https://example.com/terms");
  };

  return (
    <View className="flex items-center bg-coolGrey  py-4 h-full">
      <Image source={require("../../assets/logo.png")} className="mt-20" />
      <Image source={require("../../assets/app-icon.png")} className="mt-32" />
      <View className="mt-32 gap-8 flex-col items-center justify-center max-w-80">
        <Text className="font-poppins text-white font-semibold text-2xl ">
          Welcome to the best {"\n"} YouTube-based learning application.
        </Text>
        <Pressable
          className="bg-spaceIndigo w-80 h-12 justify-center items-center rounded-2xl"
          onPress={() => router.navigate("/home")}
        >
          <Text className="text-white text-2xl ">Login as guest</Text>
        </Pressable>
        <View className="flex-row items-center justify-center ">
          <Text className="text-white text-center ">
            By continuing you agree with {"\n"}
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
    </View>
  );
}
