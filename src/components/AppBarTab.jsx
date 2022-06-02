import { Pressable, Text, View } from "react-native-web";
import styles from "../theme";
const AppBarTab = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log("pressed appbar")}>
        <Text>Repositorieds</Text>
      </Pressable>
    </View>
  );
};
export default AppBarTab;
