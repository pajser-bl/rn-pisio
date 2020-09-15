import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "../components/AppScreen";
import AppCard from "../components/AppCard";
import assetApi from "../api/asset";
import AppButton from "../components/AppButton";

const AssetViewScreen = ({ route, navigation }) => {
  const [asset, setAsset] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    loadAsset();
  }, []);
  const loadAsset = async () => {
    const response = await assetApi.getAsset(route.params.assetId);
    if (!response.ok) {
      return setError(true);
    }
    setAsset(response.data);
    setError(false);
  };
  return (
    <AppScreen>
      {error && <Text>Could not retrieve asset!</Text>}
      <View>
        <Text>Name:{asset.name}</Text>
        <Text>Description:{asset.description}</Text>
        <Text>Type:{asset.type}</Text>
        <Text>Status:{asset.status}</Text>
        <Text>Price:{asset.price}</Text>
        <Text>Amortization:{asset.amortization}</Text>
      </View>
      <AppButton
        title="Delete"
        onPress={() => {
          assetApi.deleteAsset(asset.id);
          navigation.navigate("Assets");
        }}
      ></AppButton>
    </AppScreen>
  );
};
// const styles = StyleSheet.create();
export default AssetViewScreen;
