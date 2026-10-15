import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { useState } from "react";
import Header from "../../components/Header/header";
import AppButton from "../../components/AppButton/appButton";
import Card from "../../components/Card/card";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { StatusBar } from "expo-status-bar";

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

type Filtro = "todas" | "concluidas" | "pendentes";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "Tarefas">;

const TarefasScreen = ({ navigation, route }: NavigationProps) => {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState(data as Tarefa[]); // Array<Tarefa>
  const [filtro, setFiltro] = useState("todas" as Filtro);

  const tarefasVisiveis = () => {
    if (filtro === "pendentes") {
      return tarefas.filter((task) => !task.concluida);
    }
    if (filtro === "concluidas") {
      return tarefas.filter((task) => task.concluida);
    }
    return tarefas;
  };

  return (
    <View style={styles.mainContainer}>
      {/* <ScrollView contentContainerStyle={{ alignItems: "center" }} showsVerticalScrollIndicator={false}> */}
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../../../assets/arrow-right.png")}
          />
        </TouchableOpacity>
        <Header titulo="Tarefas" subtitulo="Lista de tarefas" />
      </View>
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
      </View>
      <View
        style={{
          marginVertical: 10,
          flexDirection: "row",
          gap: 8,
        }}
      >
        <TouchableOpacity
          onPress={() => setFiltro("todas")}
          style={{
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 8,
          }}
        >
          <Text>Ver todas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFiltro("concluidas")}
          style={{
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 8,
          }}
        >
          <Text>Concluidas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFiltro("pendentes")}
          style={{
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 8,
          }}
        >
          <Text>Pendentes</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tarefasVisiveis()}
        keyExtractor={(tarefa) => tarefa.id}
        renderItem={({ item: tarefa }) => {
          return (
            <Card
              titulo={tarefa.titulo}
              concluida={tarefa.concluida}
              id={tarefa.id}
              onDelete={() => {
                setTarefas(tarefas.filter((t) => t.id !== tarefa.id));
              }}
              onToggle={() => {
                setTarefas(
                  tarefas.map((t) =>
                    tarefa.id === t.id ? { ...t, concluida: !t.concluida } : t,
                  ),
                );
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#45c7cc",
  },
});

export default TarefasScreen;
