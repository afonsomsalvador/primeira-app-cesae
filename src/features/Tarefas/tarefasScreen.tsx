import { View, TextInput, TouchableOpacity, Text, FlatList } from "react-native";
import { useState } from "react";
import Header from "../../components/Header/header";
import AppButton from "../../components/AppButton/appButton";
import Card from "../../components/Card/card";

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

const TarefasScreen = () => {
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
    <View>
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

export default TarefasScreen;
