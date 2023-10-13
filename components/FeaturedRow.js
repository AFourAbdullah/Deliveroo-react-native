import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      <View className="flex-row items-center justify-between px-4 mt-4">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text className="text-xs px-4 text-gray-500">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          // paddingTop: 10,
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          //   key={restaurant._id}
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Nandos"
          rating={5.0}
          genre="Japanese"
          address="123 main street"
          short_description="this is test short desc"
          dishes={[]}
          long={20}
          lat={30}
        />
        <RestaurantCard
          //   key={restaurant._id}
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Nandos"
          rating={5.0}
          genre="Japanese"
          address="123 main street"
          short_description="this is test short desc"
          dishes={[]}
          long={20}
          lat={30}
        />
        <RestaurantCard
          //   key={restaurant._id}
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Nandos"
          rating={5.0}
          genre="Japanese"
          address="123 main street"
          short_description="this is test short desc"
          dishes={[]}
          long={20}
          lat={30}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
