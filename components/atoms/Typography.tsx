import { TypographyVariant } from "@/types/Typography";
import { StyleSheet, Text, TextProps } from "react-native";

interface TypographyProps extends TextProps {
  variant?: TypographyVariant;
  children?: React.ReactNode;
  text?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  children,
  style,
  text,
  ...rest
}) => {
  return (
    <Text style={[styles[variant], style]} {...rest}>
      {children ? children : text}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontFamily: "Manrope-ExtraBold",
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "800",
    color: "white",
  },
  h2: {
    fontFamily: "Manrope-ExtraBold",
    fontSize: 20,
    lineHeight: 25,
    fontWeight: "800",
    color: "white",
  },
  h3: {
    fontFamily: "Manrope-ExtraBold",
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "800",
    //letterSpacing: -1,
    color: "white",
  },
  h4: {
    fontFamily: "Manrope-ExtraBold",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "800",
    //letterSpacing: -1,
    color: "white",
  },
  subtitle1: {
    fontFamily: "Manrope-Bold",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "700",
    //letterSpacing: -1,
    color: "white",
  },
  body1: {
    fontFamily: "Manrope-Regular",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "400",
    //letterSpacing: -1,
  },
  body2: {
    fontFamily: "Manrope-Regular",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "400",
  },
  caption: {
    fontFamily: "Manrope-Regular",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 13,
  },
});
