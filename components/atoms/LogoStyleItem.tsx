import NoStyle from "@/assets/images/no-style.png";
import { Colors } from "@/constants/theme";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Typography } from "./Typography";

interface IProps {
  id: string;
  name: string;
  image?: React.ReactNode | null;
  isSelected: boolean;
  onPress: (id: string) => void;
}

export const LogoStyleItem = ({
  id,
  name,
  image = noStyle,
  isSelected,
  onPress,
}: IProps) => {
  return (
    <TouchableOpacity
      style={[styles.itemContainer]}
      activeOpacity={0.7}
      onPress={() => onPress(id)}
    >
      <View style={[styles.imageWrapper, isSelected && styles.selected]}>
        {image}
      </View>
      <Typography
        text={name}
        style={[
          styles.itemName,
          { color: isSelected ? Colors.white : Colors.placeholder },
        ]}
        variant={isSelected ? "subtitle1" : "body2"}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    maxWidth: 90,
    marginRight: 12,
  },
  imageWrapper: {
    width: 90,
    height: 90,
    borderRadius: 13.71,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  selected: {
    borderWidth: 2,
    borderColor: Colors.white,
  },
  itemName: {
    marginTop: 6,
    textAlign: "center",
  },
  image: {
    width: 40,
    height: 40,
  },
});

const noStyle = <Image source={NoStyle} style={styles.image} />;
