import Stars from "@/assets/images/stars.png";
import { Button } from "@/components/atoms/Button";
import { SurpriseMeButton } from "@/components/atoms/ButtonWithIcon";
import { Input } from "@/components/atoms/Input";
import { Nofication } from "@/components/atoms/Nofication";
import { Typography } from "@/components/atoms/Typography";
import { LogoStyleSelector } from "@/components/molecules/LogoStyleSelector";
import { ScreenTemplate } from "@/components/templates/ScreenTemplate";
import { router } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Home() {
  const navigateToOutput = () => {
    router.push("/Output");
  };

  const handleCreate = () => {
    navigateToOutput();
  };

  const [text, setText] = useState("");

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <View style={styles.header}>
          <Typography text="AI Logo" variant="h3" />
        </View>
        <View style={styles.content}>
          <Nofication state="loading" />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography text="Enter Your Prompt" variant="h2" />
            <SurpriseMeButton onPress={() => {}} />
          </View>
          <View style={styles.inputContainer}>
            <Input
              value={text}
              placeholder="A blue lion logo reading 'HEXA' in bold letters"
              onChangeText={setText}
            />
          </View>
          <LogoStyleSelector />
        </View>
      </View>
      <Button style={styles.createButton} handlePress={handleCreate}>
        <View style={styles.buttonContentContainer}>
          <Typography text={"Create"} variant="h3" />
          <Image source={Stars} style={styles.buttonImage} />
        </View>
      </Button>
    </ScreenTemplate>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    height: "100%",
  },
  content: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  inputContainer: {
    marginTop: 12,
  },
  createButton: {
    marginHorizontal: 24,
    marginBottom: 12,
  },
  buttonContentContainer: {
    flexDirection: "row",
  },
  buttonImage: {
    width: 20,
    height: 20,
    marginLeft: 8,
  },
});
