import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

const RestaurantScreen = () => {
  const navigation = useNavigation();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView className="bg-white pt-6">
      <View>
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="h-56 w-full bg-gray-300 p-4 "
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute left-5 top-6 p-2 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon color="#00ccbb" size={20} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
// const styles = StyleSheet.create({
//   container: {
//     paddingTop: StatusBar.currentHeight,
//   },
// });

export default RestaurantScreen;
