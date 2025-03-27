import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Card, Image, AirbnbRating } from "@rneui/base";

export default function ListHouses(props) {
  const {
    images,
    name,
    description,
    price,
    rating,
    count,
    direction,
    navigation,
  } = props;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("DetailPlaceStack", {
          place: { images, name, description, rating, count, price, direction },
        })
      }
    >
      <Card>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{
              uri: images ? images[0] : "https://placehold.co/80x80.png",
            }}
            style={{ width: 80, height: 80 }}
          />
          <View
            style={{ flex: 1, flexDirection: "column", marginHorizontal: 8 }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontWeight: "bold" }}>{name}</Text>
              <AirbnbRating
                count={5}
                defaultRating={rating / count}
                size={12}
                showRating={false}
                isDisabled={true}
              />
            </View>

            <Text style={{ fontSize: 12 }}>
              {description.length > 160
                ? description.substring(0, 160) + "..."
                : description}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              {price ? `$${price}` : "Precio no disponible"}
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
