import { Pressable } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";
const HomeTab = () => {
  return (
    <Pressable>
      <Link to="/">
        <Text>Repositories</Text>
      </Link>
    </Pressable>
  );
};
export default HomeTab;
