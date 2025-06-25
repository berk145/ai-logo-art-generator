import { Colors } from "@/constants/theme";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from "react-native";
import { Typography } from "../atoms/Typography";

import Abstract from "@/assets/images/abstract.png";
import Mascot from "@/assets/images/mascot.png";
import Monogram from "@/assets/images/monogram.png";
import { LogoStyleItem } from "../atoms/LogoStyleItem";

export const LogoStyleSelector = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const renderItem = ({ item }: { item: StyleData }) => {
    return (
      <LogoStyleItem
        id={item.id}
        isSelected={selectedItem === item.id}
        name={item.name}
        image={item.image}
        onPress={(id: string) => {
          setSelectedItem(id);
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Typography text="Logo Styles" variant="h2" style={styles.title} />
      <FlatList
        data={mock}
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
});

const MockImage = (image: ImageSourcePropType) => (
  <Image
    source={image}
    resizeMethod="auto"
    resizeMode="cover"
    style={{ width: "100%", height: "100%" }}
  />
);
const mock: StyleData[] = [
  {
    id: "no-style",
    name: "No Style",
  },
  {
    id: "monogram",
    name: "Monogram",
    image: MockImage(Monogram),
  },
  {
    id: "abstract",
    name: "Abstract",
    image: MockImage(Abstract),
  },
  {
    id: "mascot",
    name: "Mascot",
    image: MockImage(Mascot),
  },
];

interface StyleData {
  id: string;
  name: string;
  image?: React.JSX.Element;
}
