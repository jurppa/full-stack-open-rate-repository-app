import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,

    backgroundColor: "grey",
    height: 75,
  },
  headerText: {
    marginLeft: 50,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log("pressed appbar")}>
        <Text style={styles.headerText}>Repositories</Text>
      </Pressable>
    </View>
  );
};
export default AppBar;
