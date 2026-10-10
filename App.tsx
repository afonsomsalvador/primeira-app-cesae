import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function App() {
  const nome = "Afonso";

  return (
    <View style={styles.mainContainer}>
       {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={{borderWidth: 1, alignItems: "center"}}>
        <Text style={{ color: "white", fontSize: 30 }}>Olá, <Text style={{fontWeight: "bold"}}>{nome}</Text>!</Text>
        <Text numberOfLines={1} style={{color: "#fff"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum</Text>
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
      </View>
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
