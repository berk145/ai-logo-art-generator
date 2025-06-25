import Cancel from "@/assets/images/cancel.png";
import { Typography } from "@/components/atoms/Typography";
import { ScreenTemplate } from "@/components/templates/ScreenTemplate";
import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import CopyIcon from "@/assets/images/copy.png";
import Logo from "@/assets/images/logo-output.jpg";
import { Colors } from "@/constants/theme";
import * as Clipboard from "expo-clipboard";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

export default function Output() {
  const promptText =
    "A professional logo for Harrison & Co. Law Firm, using balanced serif fonts";

  const handleCopyPress = () => {
    Clipboard.setStringAsync(promptText);
    Toast.show({
      type: "success",
      text1: "Text coppied to clipboard",
      position: "bottom",
    });
  };

  return (
    <ScreenTemplate>
      <View style={styles.content}>
        <View style={styles.titleSection}>
          <Typography text="Your Design" variant="h1" />
          <TouchableOpacity
            onPress={router.back}
            activeOpacity={0.7}
            style={styles.button}
          >
            <Image source={Cancel} style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={Logo}
            style={styles.image}
            resizeMethod="scale"
            resizeMode="cover"
          />
        </View>
        <View style={styles.promptCardSection}>
          <View style={styles.card}>
            <View style={styles.header}>
              <Typography text={"Prompt"} variant="subtitle1" />
              <TouchableOpacity
                onPress={handleCopyPress}
                style={styles.copyButton}
              >
                <Image source={CopyIcon} style={styles.copyButtonImage} />
                <Typography
                  text="Copy"
                  variant="caption"
                  style={{ color: Colors.dark400 }}
                />
              </TouchableOpacity>
            </View>
            <Typography
              text={
                "A professional logo for Harrison & Co. Law Firm, using balanced serif fonts"
              }
              variant="body1"
              style={{ color: Colors.white }}
            />
            <View style={styles.tag}>
              <Text style={styles.tagText}>{"Monogram"}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScreenTemplate>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 24,
  },

  titleSection: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    height: 60,
    justifyContent: "center",
  },
  buttonIcon: {
    width: 20,
    height: 20,
  },
  imageContainer: {
    width: "100%",
    maxHeight: 342,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 24,
  },
  image: {
    maxWidth: "100%",
    aspectRatio: 1,
    maxHeight: 342,
  },
  promptCardSection: {},
  card: {
    backgroundColor: Colors.inputBackground,
    borderRadius: 12,
    padding: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  headerText: {},
  copyButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  copyButtonImage: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
  promptText: {},
  tag: {
    height: 24,
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginTop: 12,
    backgroundColor: "#FAFAFA1A",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  tagText: {
    fontFamily: "Manrope-Regular",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "400",
    color: Colors.white,
  },
});
