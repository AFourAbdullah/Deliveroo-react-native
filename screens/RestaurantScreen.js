import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";

import {
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { setRestaurant } from "../features/RestaurantSlice";
import { useDispatch } from "react-redux";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
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
  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, [dispatch]);
  return (
    <>
      <BasketIcon />
      <ScrollView className="pt-6 ">
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
        <View className="bg-white">
          <View className="px-4 pt-4 ">
            <Text className="font-bold text-3xl">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1 mt-2">
                <StarIcon color="green" opacity={0.5} size={20} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> . {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1 mt-2">
                <MapPinIcon color="green" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-500">Nearby -{address}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" size={20} opacity={0.6} />
            <Text className="flex-1">Have a food Allergy?</Text>
            <ChevronRightIcon color="#00ccbb" size={20} />
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};
// const styles = StyleSheet.create({
//   container: {
//     paddingTop: StatusBar.currentHeight,
//   },
// });

export default RestaurantScreen;
