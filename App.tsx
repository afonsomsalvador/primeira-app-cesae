import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/navigation/types";
import HomeScreen from "./src/features/Home/homeScreen";
import TarefasScreen from "./src/features/Tarefas/tarefasScreen";
import DetalheScreen from "./src/features/Detalhes/detalheScreen";
import FormularioScreen from "./src/features/Formulario/formularioScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Tarefas" component={TarefasScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Detalhes" component={DetalheScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Formulario" component={FormularioScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}