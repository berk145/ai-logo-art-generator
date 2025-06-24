import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IProps {
  onPress: VoidFunction;
}

export const SurpriseMeButton = ({ onPress }: IProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.7}
    >
      <View style={styles.buttonContent}>
        <Text style={styles.emoji}>🎲</Text>
        <Text style={styles.buttonText}>Surprise me</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {},
  buttonContent: {
    flexDirection: "row",
  },
  emoji: {},
  buttonText: { color: "white" },
});
