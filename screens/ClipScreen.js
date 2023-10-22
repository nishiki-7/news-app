import { StyleSheet, SafeAreaView, Text } from "react-native";

export const ClipScreen = ({ route }) => {
  return (
    <SafeAreaView style={StyleSheet.container}>
      <Text>hogehoge</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff",
  },
});
