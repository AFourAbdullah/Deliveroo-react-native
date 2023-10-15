import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Currency from "react-currency-formatter";

import {
  selectBaseketItems,
  selectBaseketTotal,
} from "../features/BasketSlice";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const BasketIcon = () => {
  const items = useSelector(selectBaseketItems);
  const basketToal = useSelector(selectBaseketTotal);
  const navigation = useNavigation();
  if (items.length == 0) return null;
  return (
    <View className="absolute bottom-10 z-50 w-full">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="p-4 mx-4 items-center justify-between flex-row bg-[#00ccbb] space-x-1 rounded-lg"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01a296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency currency="GBP" quantity={basketToal} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
