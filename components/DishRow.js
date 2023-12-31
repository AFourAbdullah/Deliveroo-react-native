import { View, Text, TouchableOpacity, Image } from "react-native";
import Currency from "react-currency-formatter";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBaseketItems,
  selectBaseketItemsWithId,
} from "../features/BasketSlice";

const DishRow = ({ id, name, description, price, image }) => {
  const dispatch = useDispatch();
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBaseketItemsWithId(state, id));
  const addItemsToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };
  const removeItemsFromBasket = () => {
    if (items.length == 0) return;
    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border border-gray-200 p-4 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lb mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency currency="GBP" quantity={price} />
            </Text>
          </View>
          <View>
            <Image
              source={{
                uri: urlFor(image).url(),
              }}
              style={{
                borderWidth: 1,
                borderColor: "#f3f3f4",
              }}
              className="w-20 h-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-2">
          <View className="flex-row items-center space-x-2 pt-4 pb-3">
            <TouchableOpacity>
              <MinusCircleIcon
                onPress={removeItemsFromBasket}
                color={items.length > 0 ? "#00ccbb" : "gray"}
                size={40}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity>
              <PlusCircleIcon
                onPress={addItemsToBasket}
                color="#00ccbb"
                size={40}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
