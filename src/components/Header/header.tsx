import { View, Text, TouchableOpacity } from "react-native";

type HeaderProps = {
  titulo: string;
  subtitulo?: string;
};

const Header = ({ titulo, subtitulo = "Subtitulo teste" }: HeaderProps) => {
  return (
    <View style={{ position: "absolute", top: 20, flexDirection: "row" }}>
      <TouchableOpacity></TouchableOpacity>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{titulo}</Text>
      {subtitulo && <Text>{subtitulo}</Text>}
    </View>
  );
};

export default Header;
