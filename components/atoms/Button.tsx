import { LinearGradient } from "expo-linear-gradient";
import React, { PropsWithChildren } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { Typography } from "./Typography";

interface IProps extends TouchableOpacityProps {
  handlePress: VoidFunction;
  text?: string;
  style?: StyleProp<ViewStyle>;
}

export const Button: React.FC<PropsWithChildren<IProps>> = ({
  handlePress,
  children,
  text,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[styles.button, style]}
    >
      <LinearGradient
        colors={["#2938DC", "#943DFF"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.gradientBackground}
      >
        {children ? children : <Typography text={text} variant="h3" />}
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    maxWidth: "100%",
    height: 56,
    borderRadius: 50,
    backgroundColor: "red",
    overflow: "hidden",
  },
  gradientBackground: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
