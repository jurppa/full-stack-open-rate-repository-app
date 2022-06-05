import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import SignInTab from "./SignInTab";
import HomeTab from "./HomeTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: "row",
    justifyContent: "space-evenly",

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
      <ScrollView horizontal>
        <HomeTab />
        <SignInTab />
      </ScrollView>
    </View>
  );
};
export default AppBar;
