import { View, Image, StyleSheet } from "react-native";

import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "black",
    flexDirection: "column",
    fontSize: 17,
    padding: 14,
    alignItems: "center",
  },
  language: {
    textAlign: "center",

    borderStyle: "solid",
    backgroundColor: "grey",
    borderWidth: 1,
    borderRadius: 4,
    width: 100,
    padding: 5,
    borderColor: "white",
  },
  imageContainer: {
    flex: 0,
    justifyContent: "space-between",
    padding: 8,
    flexDirection: "row",
  },
});

const formatNumbers = (number) => {
  const formattedNumber =
    number > 1000 ? (number / 1000).toFixed(1) + "k" : number;

  return formattedNumber;
};
const RepositoryItem = ({ item }) => {
  console.log(item);
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.ownerAvatarUrl }}
          style={{ width: 50, height: 50 }}
        ></Image>

        <Text>
          <Text>{item.fullName}</Text>
        </Text>
      </View>

      <View>
        <Text>{item.description}</Text>
      </View>
      <Text style={styles.language}>{item.language}</Text>
      <Text>Stars: {formatNumbers(item.stargazersCount)}</Text>
      <Text>Forks: {formatNumbers(item.forksCount)}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
