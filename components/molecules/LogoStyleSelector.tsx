import { Colors } from "@/constants/theme";
import React, { memo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  View,
} from "react-native";
import { Typography } from "../atoms/Typography";

import { useLogoStyles } from "@/hooks/useLogoStyles";
import { LogoStyleItem } from "../atoms/LogoStyleItem";

interface IProps {
  onSelect: (style: LogoStyle) => void;
}

const LogoStyleSelectorComponent = ({ onSelect }: IProps) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const { loading, logoStylesData } = useLogoStyles();

  const renderItem = ({ item }: { item: LogoStyle }) => {
    const image =
      item.image !== "no-style" ? (
        <Image
          source={{ uri: item.image }}
          resizeMethod="auto"
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      ) : undefined;
    return (
      <LogoStyleItem
        id={item.id}
        isSelected={selectedItem === item.id}
        name={item.name}
        image={image}
        onPress={(id: string) => {
          setSelectedItem(id);
          onSelect(item);
        }}
      />
    );
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Typography text="Logo Styles" variant="h2" style={styles.title} />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="white" />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Typography text="Logo Styles" variant="h2" style={styles.title} />
      <FlatList
        data={logoStylesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  title: {
    color: Colors.white,
    marginBottom: 12,
  },
  loadingContainer: {
    width: "100%",
    height: 90,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const LogoStyleSelector = memo(LogoStyleSelectorComponent);
LogoStyleSelector.displayName = "LogoStyleSelector";
