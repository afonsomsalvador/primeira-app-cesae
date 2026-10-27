import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { RootStackParamList } from "./src/navigation/types";
import HomeScreen from "./src/features/Home/homeScreen";
import TarefasScreen from "./src/features/Tarefas/tarefasScreen";
import DetalheScreen from "./src/features/Detalhes/detalheScreen";
import FormularioScreen from "./src/features/Formulario/formularioScreen";
import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const esquema = useColorScheme();
  return (
    <NavigationContainer theme={esquema === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Tarefas" component={TarefasScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Detalhes" component={DetalheScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Formulario" component={FormularioScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}