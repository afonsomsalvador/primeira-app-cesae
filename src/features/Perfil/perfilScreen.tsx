import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Header from "../../components/Header/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Lucide } from "@react-native-vector-icons/lucide";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "Perfil">;

type IconName = React.ComponentProps<typeof Lucide>["name"];

const estatisticas = [
  { valor: 12, label: "Tarefas" },
  { valor: 8, label: "Feitas" },
  { valor: 5, label: "Dias seguidos" },
];

const opcoes: { icone: IconName; label: string }[] = [
  { icone: "user", label: "Editar perfil" },
  { icone: "bell", label: "Notificações" },
  { icone: "lock", label: "Privacidade" },
  { icone: "circle-question-mark", label: "Ajuda" },
];

const PerfilScreen = ({ navigation }: NavigationProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Header titulo="Perfil" goBack={() => navigation.goBack()} />
        <View
          style={{
            width: 76,
            height: 76,
            marginTop: 80,
            borderRadius: 38,
            backgroundColor: "#d6e2fa",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 24, color: "#2f3a8f" }}>AS</Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            textAlign: "center",
            marginTop: 12,
            color: "#141313",
          }}
        >
          Ana Silva
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: "#555",
            textAlign: "center",
            marginTop: 6,
          }}
        >
          Estudante de DAM
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "#faf8f5",
            borderRadius: 10,
            paddingVertical: 10,
            marginVertical: 16,
          }}
        >
          {estatisticas.map((s) => (
            <View key={s.label} style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 18, color: "#2f3a8f" }}>{s.valor}</Text>
              <Text style={{ fontSize: 11, color: "#555" }}>{s.label}</Text>
            </View>
          ))}
        </View>

        {opcoes.map((o) => (
          <TouchableOpacity
            key={o.label}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              borderWidth: 1,
              borderColor: "#e3e3e3",
              borderRadius: 10,
              paddingHorizontal: 14,
              paddingVertical: 11,
              marginBottom: 8,
            }}
          >
            <Lucide name={o.icone} size={18} color={"#2f3a8f"} />
            <Text
              style={{
                flex: 1,
                fontSize: 15,
                fontWeight: "500",
                color: "#141313",
              }}
            >
              {o.label}
            </Text>
            <Lucide name="chevron-right" size={18} color="#555" />
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            borderWidth: 1,
            borderColor: "#d99aa8",
            borderRadius: 10,
            paddingVertical: 11,
            marginTop: 8,
          }}
          onPress={() => navigation.popToTop()}
        >
          <Lucide name="log-out" size={18} color="#8a1c3c" />
          <Text style={{ fontSize: 15, color: "#8a1c3c" }}>
            Terminar sessão
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PerfilScreen;
