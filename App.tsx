import React from "react";
import { StatusBar } from "expo-status-bar";

import Routes from "./src/routes";

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="dark" />
      <Routes />
    </>
  );
};

export default App;
