import { Colors } from "@/constants/theme";
import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from "react-native";
import { Typography } from "./Typography";

type IProps = TextInputProps & {
  label?: string;
  charCount?: boolean;
  maxLength?: number;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string; // Optional placeholder
  InputStyles?: StyleProp<TextStyle>;
};

export const Input = ({
  charCount = true,
  maxLength = 500,
  value,
  placeholder,
  onChangeText,
  InputStyles,
  ...rest
}: IProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, isFocused && styles.containerFocused]}>
      <TextInput
        style={[styles.input, InputStyles]}
        onChangeText={onChangeText}
        value={value}
        multiline={true}
        maxLength={maxLength}
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor={Colors.placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        keyboardAppearance="dark"
        {...rest}
      />
      {charCount && (
        <Typography style={styles.charCounter} variant="caption">
          {value.length}/{maxLength}
        </Typography>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 175,
    backgroundColor: Colors.inputBackground,
    padding: 12,
    borderRadius: 16,
  },

  input: {
    flex: 1,
    borderRadius: 16,
    textAlignVertical: "top",
    color: Colors.white,
    fontFamily: "Manrope-Regular",
    fontSize: 16,
    lineHeight: 21,

    height: "100%",
  },
  containerFocused: {
    borderColor: Colors.white,
  },
  charCounter: {
    color: Colors.placeholder,
  },
});
