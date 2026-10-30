import { View, Text, TouchableOpacity, Image } from "react-native";

type HeaderProps = {
  titulo: string;
  subtitulo?: string;
  visibilityEdit?: boolean;
  goBack?: () => void;
};

const Header = ({ titulo, subtitulo, goBack, visibilityEdit = true }: HeaderProps) => {
  return (
    <View
      style={{
        position: "absolute",
        top: 35,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        onPress={goBack}
        style={{
          padding: 12,
          backgroundColor: "#fff",
          borderRadius: 15,
        }}
      >
        <Image
          source={require("../../../assets/arrow-left42.png")}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 18 }}>{titulo}</Text>
    {visibilityEdit && (
      <TouchableOpacity
        onPress={goBack}
        style={{
          padding: 12,
          backgroundColor: "#fff",
          borderRadius: 15,
        }}
      >
        <Image
          source={require("../../../assets/edit.png")}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    )}
    </View>
  );
};

export default Header;
