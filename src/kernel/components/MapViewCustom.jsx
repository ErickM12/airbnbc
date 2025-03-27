import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function MapViewCustom(props) {
  const {
    direction,
    latitudeDelta,
    longitudeDelta,
    width,
    height,
    name,
    description,
  } = props;
  console.log(
    "MapViewCustom -> direction",
    direction.latitude,
    direction.longitude
  );

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: direction.latitude || 18.85021230844968,
          longitude: direction.longitude || -99.20069258870507,
          latitudeDelta: latitudeDelta || 0.002, // Reducido para acercar el zoom
          longitudeDelta: longitudeDelta || 0.002,
        }}
        zoomEnabled={true}
        scrollEnabled={true}
        zoomControlEnabled={true}
        style={{ width: width || "95%", height: height || 384 }}
      >
        <Marker
          key={direction.latitude}
          coordinate={{
            latitude: direction.latitude,
            longitude: direction.longitude,
          }}
          title={name}
          description={description}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
