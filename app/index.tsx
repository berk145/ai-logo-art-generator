import Stars from "@/assets/images/stars.png";
import { Button } from "@/components/atoms/Button";
import { SurpriseMeButton } from "@/components/atoms/ButtonWithIcon";
import { Input } from "@/components/atoms/Input";
import { Nofication } from "@/components/atoms/Nofication";
import { Typography } from "@/components/atoms/Typography";
import { LogoStyleSelector } from "@/components/molecules/LogoStyleSelector";
import { ScreenTemplate } from "@/components/templates/ScreenTemplate";
import { useRandomPrompt } from "@/hooks/useRandomPrompt";
import { useAppStore } from "@/store/useAppStore";
import { getRandomDuration, shouldFail } from "@/utils/generic";
import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Home() {
  const { fetchRandomPrompt, prompt } = useRandomPrompt();
  const { setLogoStyle, setStatus, setPrompt } = useAppStore();

  const [text, setText] = useState("");
  const [selectedStyle, setSelectedStyle] = useState<null | LogoStyle>(null);
  const [currentStatus, setCurrentStatus] = useState<NotificationState>("idle");

  useEffect(() => {
    if (prompt && prompt !== text) {
      setText(prompt);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prompt]);

  const handleCreate = async () => {
    const waitTime = getRandomDuration();
    setCurrentStatus("loading");

    await new Promise((resolve) => setTimeout(resolve, waitTime));
    if (shouldFail()) {
      setCurrentStatus("error");
    } else {
      setCurrentStatus("success");
      setStatus("success");
      selectedStyle && setLogoStyle(selectedStyle);
      setPrompt(text);
    }
  };

  const getPrompt = () => {
    fetchRandomPrompt();
  };

  const disableCreateButton =
    selectedStyle === null || text.length === 0 ? true : false;

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <View style={styles.header}>
          <Typography text="AI Logo" variant="h3" />
        </View>
        <View style={styles.content}>
          {currentStatus !== "idle" && (
            <Nofication state={currentStatus} reset={handleCreate} />
          )}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography text="Enter Your Prompt" variant="h2" />
            <SurpriseMeButton onPress={getPrompt} />
          </View>
          <View style={styles.inputContainer}>
            <Input
              value={text}
              placeholder="A blue lion logo reading 'HEXA' in bold letters"
              onChangeText={setText}
            />
          </View>
          <LogoStyleSelector onSelect={(style) => setSelectedStyle(style)} />
        </View>
      </View>
      <Button
        style={[
          styles.createButton,
          { opacity: disableCreateButton ? 0.3 : 1 },
        ]}
        handlePress={handleCreate}
        disabled={disableCreateButton}
      >
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
