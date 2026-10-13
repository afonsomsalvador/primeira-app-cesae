import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Alert,
  TextInput,
  FlatList,
} from "react-native";
import Header from "./src/components/Header/header";
import AppButton from "./src/components/AppButton/appButton";
import { useState } from "react";

type Tarefa = {
  id: string;
  titulo: string;
  concluida: boolean;
};

const data = [
  {
    id: "1",
    titulo: "Regar as plantas",
    concluida: false,
  },
  {
    id: "2",
    titulo: "Fazer compras",
    concluida: false,
  },
  {
    id: "3",
    titulo: "Lavar o carro",
    concluida: true,
  },
] as Array<Tarefa>; // Tarefa[]

export default function App() {
  const nome = "Afonso";
  // const [contador, setContador] = useState<number>(0 as number);
  const [contador, setContador] = useState(0);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState(data as Tarefa[]); // Array<Tarefa>

  console.log("Contador: ", contador);
  return (
    <View style={styles.mainContainer}>
      {/* <ScrollView contentContainerStyle={{ alignItems: "center" }} showsVerticalScrollIndicator={false}> */}
      <Header titulo="Header Home" subtitulo="Bem-vindo ao aplicativo" />
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextInput
            value={novaTarefa}
            onChangeText={setNovaTarefa} // (text) => setEmail(text)
            placeholder="Insira nova tarefa"
          />
          <AppButton
            title="Inserir"
            onPress={() => {
              const novaTarefaObj = {
                id: String(tarefas.length + 1), //.toString()
                titulo: novaTarefa,
                concluida: false,
              } as Tarefa;

              if (novaTarefa.length > 0) {
                setTarefas([...tarefas, novaTarefaObj]);
              }
              setNovaTarefa("");
            }}
          />
        </View>

        <Text style={{ color: "white", fontSize: 30 }}>
          Olá, <Text style={{ fontWeight: "bold" }}>{nome}</Text>!
        </Text>
        <Text numberOfLines={1} style={{ color: "#fff" }}>
          Lorem Ipsum is simply d ummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since 1966, when designers at Letraset and James Mosley, the librarian
          at St Bride Printing Library in London, took a 1914 Cicero translation
          and scrambled it to make dummy text for Letraset's Body Type sheets.
          It has survived not only many decades, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised thanks to these sheets and more recently with desktop
          publishing software like Aldus PageMaker and Microsoft Word including
          versions of Lorem Ipsum
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
          source={require("./assets/icon.png")}
        />
        <Text>{contador}</Text>
        <AppButton title="Click Me" onPress={() => setContador(contador + 1)} />
      </View>
      <FlatList
        data={tarefas}
        keyExtractor={(tarefa) => tarefa.id}
        renderItem={({ item: tarefa }) => {
          return <Text>{tarefa.titulo}</Text>;
        }}
      />
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#45c7cc",
    alignItems: "center",
    justifyContent: "center",
  },
});
