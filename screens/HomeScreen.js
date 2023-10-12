import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";

import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.container} className="bg-white pt-6">
      {/* <Text className="text-red-400 bg-white">HomeScreen</Text> */}
      {/* header */}
      <View className="mx-4 pb-3 space-x-2 flex-row items-center px-4">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-xs text-gray-400">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon color="#00ccbb" size={20} />
          </Text>
        </View>
        <UserIcon color="#00ccbb" />
      </View>
      <View className="flex-row space-x-2  items-center mx-4 pb-3 px-4">
        <View className="flex-row space-x-2 flex-1 items-center bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00ccbb" />
      </View>
      <ScrollView>{/* categories */}</ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});

export default HomeScreen;
