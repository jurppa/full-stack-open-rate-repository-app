import { View, Image, StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  itemContainer: {
    alignContent: "center",
    backgroundColor: "black",
    fontSize: 17,
    padding: 14,
  },
});

const RepositoryItem = ({ item }) => {
  console.log(item);
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.ownerAvatarUrl }} style={theme.image}></Image>
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
