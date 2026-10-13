import { Button, TouchableOpacity, Text } from "react-native";

const AppButton = () => {
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
        onPress={() => {
          console.log("Button pressed");
        }}
      >
        <Text style={{ fontSize: 16, fontFamily: "Arial", fontWeight: "bold" }}>
          Click Me
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default AppButton;
