import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";


const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    image: require('./foco.png'),
    display: 'Pausa',
  },
  {
    id: 'short',
    initialValue: 5,
    image: require('./curto.png'),
    display: 'Pausa Curta',
  },
  {
    id: 'long',
    initialValue: 15,
    image: require('./longo.png'),
    display: 'Pausa Longa',
  }

]


export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[1])




  return (
    <View
      style={styles.container}
    >
      <Image source={timerType.image} />
      <View style={styles.actions} >
        <View style={styles.context}>
          <Pressable style={styles.contextButtonActive}>
            <Text style={styles.contextButtonText}>
              Pausa
            </Text>
          </Pressable>
        </View>

        <Text style={styles.timer}>
          {new Date(timerType.initialValue * 1000).toLocaleTimeString('pt-BR', { minute: '2-digit', second: '2-digit' })}
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Começar
          </Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
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
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center"
  },
  contextButtonActive: {
    backgroundColor: '#144480',
    borderRadius: 8,
  }
  ,
  contextButtonText: {
    fontSize: 12.5,
    color: '#fff',
    padding: 8

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

  },
  footer: {
    width: '80%'
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5
  }
})