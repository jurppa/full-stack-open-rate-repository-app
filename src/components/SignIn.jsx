import { View, StyleSheet } from "react-native";
import Text from "./Text";
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

    flexShrink: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
});
const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text>The sign in view</Text>
    </View>
  );
};

export default SignIn;
