import { View } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";
const SignInTab = () => {
  return (
    <View>
      <Link to="/signin">
        <Text>Sign In</Text>
      </Link>
    </View>
  );
};
export default SignInTab;
