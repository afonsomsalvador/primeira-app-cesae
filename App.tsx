import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { RootStackParamList } from "./src/navigation/types";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/features/Home/homeScreen";
import TarefasScreen from "./src/features/Tarefas/tarefasScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tarefas" component={TarefasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}