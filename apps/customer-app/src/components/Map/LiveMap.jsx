import React from "react";
import MapView, { Marker } from "react-native-maps";

export default function LiveMap({ location }) {
  if (!location) return null;

  return (
    <MapView
      style={{ flex: 1 }}
      region={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker coordinate={location} title="Delivery Man 🚴" />
    </MapView>
  );
}
