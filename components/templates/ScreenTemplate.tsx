import { Colors } from "@/constants/theme";
import React, { PropsWithChildren } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ScreenTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ImageBackground
      source={require("../../assets/images/back-gradient.png")}
      style={styles.backImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeAreaContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
          <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="never" // This is important!
          >
            <View style={styles.container}>{children}</View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  backImage: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  keyboardView: {
    flex: 1,
  },
});
