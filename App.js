import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./StackNavigator";
import store from "./store";

export default function App() {
  return (
    <>
      <Provider store={store}>
          <StackNavigator />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
