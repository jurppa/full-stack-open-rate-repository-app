import { StyleSheet, View } from "react-native";
import AppBar from "./AppBar";
import { Route, Routes, Navigate } from "react-router-native";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
//

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/signin" element={<SignIn />} exact />
      </Routes>
    </View>
  );
};

export default Main;
