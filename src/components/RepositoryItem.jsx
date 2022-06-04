import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "black",

    padding: 14,
  },
  language: {
    textAlign: "center",
    alignContent: "center",
    borderStyle: "solid",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    width: 100,
    padding: 5,
    borderColor: "white",
  },

  imageContainer: {
    flexDirection: "row",
    textAlign: "left",
    padding: 8,
    backgroundColor: "#F7F8EF",
    marginBottom: 20,
    borderRadius: 4,
    alignItems: "flex-start",
    flexShrink: 1,
  },

  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
  },
});

const formatNumbers = (number) => {
  const formattedNumber =
    number > 1000 ? (number / 1000).toFixed(1) + "k" : number;

  return formattedNumber;
};
const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.ownerAvatarUrl }}
          style={{ width: 50, height: 50, marginRight: 20, borderRadius: 7 }}
        ></Image>
        <View style={{ flex: 1 }}>
          <Text>
            <Text color={"textSecondary"} fontWeight={"bold"}>
              {item.fullName} {"\n"}
              <Text color={"textSecondary"}>{item.description}</Text>
            </Text>
          </Text>
        </View>
      </View>

      <Text style={styles.language} color={"textSecondary"}>
        {item.language}
      </Text>
      <View>
        <View style={styles.infoContainer}>
          <View style={{ flexDirection: "column" }}>
            <Text fontWeight={"bold"} style={{ textAlign: "center" }}>
              {formatNumbers(item.stargazersCount)}
            </Text>
            <View style={{ flexDirection: "column" }}>
              <Text>Stars</Text>
            </View>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text fontWeight={"bold"}>
              <Text fontWeight={"bold"} style={{ textAlign: "center" }}>
                {formatNumbers(item.forksCount)}
              </Text>
            </Text>
            <View style={{ flexDirection: "column" }}>
              <Text>Forks</Text>
            </View>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text fontWeight={"bold"} style={{ textAlign: "center" }}>
              {item.reviewCount}
            </Text>
            <View style={{ flexDirection: "column" }}>
              <Text>Reviews</Text>
            </View>
          </View>
          <View style={{ flexDirection: "column" }}></View>
          <View style={{ flexDirection: "column" }}>
            <Text fontWeight={"bold"} style={{ textAlign: "center" }}>
              {item.ratingAverage}
            </Text>
            <View style={{ flexDirection: "column" }}>
              <Text>Rating</Text>
            </View>
          </View>
          <View style={{ flexDirection: "column" }}></View>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
