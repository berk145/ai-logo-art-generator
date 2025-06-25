import ErrorIcon from "@/assets/images/alert-circle.png";
import LogoOutput from "@/assets/images/logo-output.jpg";
import { Colors } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { PropsWithChildren } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Typography } from "./Typography";

interface IProps {
  state: NotificationState;
  reset: VoidFunction;
}

const stateConfig = {
  loading: {
    colors: ["#4A5568", "#2D3748"],
    title: "Creating Your Design...",
    subtitle: "Ready in 2 minutes",
    icon: "⏳",
    pressable: false,
  },
  success: {
    colors: ["#667eea", "#764ba2"],
    title: "Your Design is Ready!",
    subtitle: "Tap to see it.",
    icon: "✓",
    pressable: true,
  },
  error: {
    colors: ["#ff6b6b", "#ee5a52"],
    title: "Oops, something went wrong!",
    subtitle: "Click to try again.",
    icon: "!",
    pressable: true,
  },
};

export const Nofication = ({ state, reset }: IProps) => {
  const IconSection = () => {
    switch (state) {
      case "loading":
        return <ActivityIndicator size="large" color="white" />;
      case "success":
        return (
          <View style={styles.errorIconContainer}>
            <Image
              source={LogoOutput}
              resizeMethod="auto"
              resizeMode="cover"
              style={styles.outputLogo}
            />
          </View>
        );
      case "error":
        return (
          <View style={styles.errorIconContainer}>
            <Image
              source={ErrorIcon}
              resizeMethod="resize"
              resizeMode="contain"
              style={styles.errorIcon}
            />
          </View>
        );

      default:
        break;
    }
  };

  const getTexts = () => {
    switch (state) {
      case "loading":
        return textSection(
          stateConfig.loading.title,
          stateConfig.loading.subtitle
        );
      case "success":
        return textSection(
          stateConfig.success.title,
          stateConfig.success.subtitle
        );
      case "error":
        return textSection(stateConfig.error.title, stateConfig.error.subtitle);

      default:
        return textSection(
          stateConfig.loading.title,
          stateConfig.loading.subtitle
        );
    }
  };

  const textSection = (title: string, subtitle: string) => (
    <View>
      <View>
        <Typography text={title} variant="h4" />
      </View>
      <View>
        <Typography
          text={subtitle}
          variant="body2"
          style={{
            color: state === "loading" ? Colors.placeholder : Colors.dark300,
          }}
        />
      </View>
    </View>
  );

  const ContentSection = () => {
    if (state === "success") {
      return (
        <LinearGradient
          colors={["#2938DC", "#943DFF"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.gradientBackground}
        >
          {getTexts()}
        </LinearGradient>
      );
    }
    return (
      <View
        style={{
          ...styles.content,
          backgroundColor:
            state === "error" ? Colors.error : Colors.inputBackground,
        }}
      >
        {getTexts()}
      </View>
    );
  };

  const Container = ({ children }: PropsWithChildren) => {
    if (state === "loading") {
      return (
        <View
          style={{
            ...styles.container,
            backgroundColor: "#18181B",
          }}
        >
          {children}
        </View>
      );
    }

    return (
      <TouchableOpacity
        style={{
          ...styles.container,
          backgroundColor: state === "error" ? Colors.white : "#18181B",
        }}
        activeOpacity={0.7}
        onPress={() => {
          if (state === "success") {
            router.navigate("/Output");
          } else {
            reset();
          }
        }}
      >
        {children}
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <View style={styles.iconSection}>
        <IconSection />
      </View>
      <ContentSection />
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    maxHeight: "100%",
    height: 70,
    borderRadius: 16,
    overflow: "hidden",
    flexDirection: "row",
    marginBottom: 24,
  },
  iconSection: {
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    height: "100%",
    paddingVertical: 14.5,
    paddingHorizontal: 12,
  },
  gradientBackground: {
    height: "100%",
    width: "100%",
    paddingVertical: 14.5,
    paddingHorizontal: 12,
  },
  errorIconContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EF4444B2",
  },
  errorIcon: {
    width: 32,
    height: 32,
  },
  outputLogo: { maxHeight: "100%", maxWidth: "100%" },
});
