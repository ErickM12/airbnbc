import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import * as Location from "expo-location";

export default function MapViewLocationCustom() {
  const [location, setLocation] = useState(null);
  let subscription;

  const startTracking = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permiso de ubicación denegado");
      return;
    }

    subscription = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (loc) => {
        setLocation(loc.coords);
        console.log("MapViewLocationCustom -> loc", loc.coords);
      }
    );
  };

  const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setLocation({ latitude, longitude });
  };

  useEffect(() => {
    startTracking();
    return () => {
      if (subscription) subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.002, // Reducido para acercar el zoom
            longitudeDelta: 0.002,
          }}
          zoomEnabled={true}
          scrollEnabled={true}
          zoomControlEnabled={true}
          style={{ width: "95%", height: 384 }}
          onPress={handleMapPress}
        >
          <Marker
            key={location.latitude}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={"Ubicación actual"}
            description={"Ubicación actual del usuario"}
          />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
