import * as React from "react";
import Main from "./src/components/Main";
import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
//

const App = () => {
  console.log("testing debugging");
  return (
    <NativeRouter>
      <Main />
      <StatusBar style="auto" />
    </NativeRouter>
  );
};
export default App;
