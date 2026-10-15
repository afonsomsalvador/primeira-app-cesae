import { View, Text, TouchableOpacity } from "react-native";
import { CardProps } from "./types";
import Checkbox from "expo-checkbox";

const Card = ({ concluida, titulo, onToggle, onDelete, id }: CardProps) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "black",
        padding: 20,
        margin: 5,
        borderRadius: 8,
        gap: 10,
        flexDirection: "row",
      }}
    >
      <Text
        style={[
          { fontSize: 16, fontWeight: "bold" },
          concluida && { textDecorationLine: "line-through" },
        ]}
      >
        {titulo}
      </Text>
      <Checkbox value={concluida} onValueChange={onToggle} />
      <TouchableOpacity onPress={onDelete}>
        <Text>Apagar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
