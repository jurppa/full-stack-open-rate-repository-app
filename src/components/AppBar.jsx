import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";

//

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,

    backgroundColor: theme.colors.background,
    height: 75,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log("pressed appbar")}>
        <Text>Repositorieds</Text>
      </Pressable>
    </View>
  );
};
export default AppBar;
