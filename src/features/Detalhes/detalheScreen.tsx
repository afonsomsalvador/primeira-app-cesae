import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { RootStackParamList } from "../../navigation/types";
import Header from "../../components/Header/header";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "Detalhes">;

const DetalheScreen = ({ navigation, route }: NavigationProps) => {
  const { tarefa } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: "#eeebeb" }}>
      <Header titulo={"Detalhe da tarefa"} goBack={() => navigation.goBack()} />
      <View
        style={{
          padding: 20,
          marginHorizontal: 20,
          backgroundColor: "#fff",
          marginTop: 100,
          borderRadius: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#b5d7ee",
              padding: 7,
              flexDirection: "row",
              borderRadius: 25,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "#3c78a0",
              }}
            >
              Em curso
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#d8dbab",
              padding: 7,
              flexDirection: "row",
              borderRadius: 25,
            }}
          >
            <Text
              style={{ fontSize: 14, fontWeight: "bold", color: "#8b8b31" }}
            >
              Prioridade alta
            </Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: 21,
            marginBottom: 10,
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          {tarefa.titulo}
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 3 }}>
          Entrega: 24 out, 23:59
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 3 }}>Categoria: Escola</Text>
      </View>
      <View
        style={{
          padding: 20,
          marginHorizontal: 20,
          backgroundColor: "#fff",
          marginTop: 15,
          borderRadius: 15,
        }}
      >
        <Text style={{ fontSize: 16, marginBottom: 5, fontWeight: "bold" }}>
          Descrição
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>bla bla bla bla</Text>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 60,
          left: 0,
          right: 0,
          display: "flex",
          marginHorizontal: 20,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{ backgroundColor: "#fff", padding: 15, borderRadius: 15 }}
        >
          <Image
            source={require("../../../assets/trash.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#3d5ce4",
            padding: 15,
            borderRadius: 15,
            marginLeft: 10,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Marcar como concluida
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetalheScreen;
