import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { RootStackParamList } from "../../navigation/types";
import Header from "../../components/Header/header";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "Detalhes">;

const DetalheScreen = ({ navigation, route }: NavigationProps) => {
  const { tarefa } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Header titulo={'Detalhe da tarefa'} />
    </View>
  );
};

export default DetalheScreen;
