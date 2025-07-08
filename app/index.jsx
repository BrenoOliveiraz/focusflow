import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image source={require('./Imagem-foco.png')} />
      <View style={styles.actions} >

        <Text style={styles.timer}>
          20:00

        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Começar
          </Text>
        </Pressable>
      </View>
      <View>
        <Text>
          Foco é poder. Crie, produza, descanse.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40
  },
  actions: {
    padding: 24,
    backgroundColor: '#14448080',
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32
  },
  timer: {
    fontSize: 54,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'

  },
  button: {
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8
  },
  buttonText: {
    textAlign: "center",
    color: '#021123',
    fontSize: 18,

  }
})