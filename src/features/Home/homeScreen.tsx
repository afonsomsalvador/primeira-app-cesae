import { View, Text, Image, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header/header";
import AppButton from "../../components/AppButton/appButton";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation, route }: NavigationProps) => {
  const nome = "Afonso";
  // const [contador, setContador] = useState<number>(0 as number);
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.mainContainer}>
      <Text style={{ color: "white", fontSize: 30 }}>
        Olá, <Text style={{ fontWeight: "bold" }}>{nome}</Text>!
      </Text>
      <Text numberOfLines={1} style={{ color: "#fff" }}>
        Lorem Ipsum is simply d ummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since 1966, when designers at Letraset and James Mosley, the librarian
        at St Bride Printing Library in London, took a 1914 Cicero translation
        and scrambled it to make dummy text for Letraset's Body Type sheets. It
        has survived not only many decades, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised thanks
        to these sheets and more recently with desktop publishing software like
        Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum
      </Text>
      <StatusBar style="light" />
      {/** Imagem remota */}
      <Image
        style={{ width: 150, height: 150 }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9397UFwjWF54rmqCmvsiIlNkKOvi6cepBKEr-RzHio6z-EEvFedkTGmhy&s=10",
        }}
      />
      {/** Imagem local */}
      <Image
        resizeMode="repeat"
        style={{ width: 50, height: 150 }}
        source={require("../../../assets/icon.png")}
      />
      <Text>{contador}</Text>
      <AppButton title="Click Me" onPress={() => setContador(contador + 1)} />
      <AppButton
        title="Ir para tarefas"
        onPress={() => navigation.navigate("Tarefas")}
      />
      <AppButton
        title="Ir para formulário"
        onPress={() => navigation.navigate("Formulario")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#45c7cc",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
