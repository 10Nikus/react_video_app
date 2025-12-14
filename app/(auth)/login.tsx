import { router } from "expo-router";
import { Image, Linking, Text, View } from "react-native";
import NavyButton from "../components/navyButton";

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
        <NavyButton
          text="Log in as guest"
          onPress={() => router.push("/home")}
        />
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
