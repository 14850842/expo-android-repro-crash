import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import * as React from "react";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </>
    );
  }
}
