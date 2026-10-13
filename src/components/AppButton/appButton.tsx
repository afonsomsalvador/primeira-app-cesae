import { Button, TouchableOpacity, Text } from "react-native";

type AppButtonProps = {
  title: string;
  onPress: () => void;
}

const AppButton = ({ title, onPress }: AppButtonProps) => {
  return (
    <>
      {/* Button nativo com diferenças visuais entre Android e iOS */}
      {/* <Button title="Click Me"/>  */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          backgroundColor: "#fff",
          marginTop: 10,
          padding: 10,
          borderRadius: 8,
        }}
        onPress={onPress}
      >
        <Text style={{ fontSize: 16, fontFamily: "Arial", fontWeight: "bold" }}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default AppButton;
