import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/RestaurantSlice";

const BasketScreen = ({ navigation }) => {
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBaseketItems);
  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  );
};

export default BasketScreen;
