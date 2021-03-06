import React, { useState, useEffect, createContext } from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import AppScreen from "../components/AppScreen";
import assetApi from "../api/asset";
import AppCard from "../components/AppCard";

const AssetIndexScreen = ({ navigation }) => {
  const [assets, setAssets] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadAssets();
  }, []);

  const loadAssets = async () => {
    const response = await assetApi.getAssets().catch();
    if (!response.ok) {
      return setError(true);
    }
    setAssets(response.data);
    setError(false);
  };

  return (
    <AppScreen>
      {error && (
        <>
          <Text>Could not retrieve assets!</Text>
        </>
      )}
      <FlatList
        data={assets}
        keyExtractor={(asset) => asset.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.name}
            onPress={() =>
              navigation.navigate("AssetView", {
                assetId: item.id,
                assets,
              })
            }
          >
            <Text>{item.description}</Text>
          </AppCard>
        )}
      ></FlatList>
    </AppScreen>
  );
};
export default AssetIndexScreen;
