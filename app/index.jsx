import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import FocusButton from '../components/focusButton'
import ActionButton from '../components/actionButton'
import Timer from '../components/timer'


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

  const [timerType, setTimerType] = useState(pomodoro[0])


  return (
    <View
      style={styles.container}
    >
      <Image source={timerType.image} />
      <View style={styles.actions} >
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton
              key={p.id}
              active={timerType.id === p.id}
              display={p.display}
              onPress={() => setTimerType(p)}
            />

          ))}
        </View>
        <Timer
          totalSeconds={timerType.initialValue}
        />
        <FocusButton />
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

  footer: {
    width: '80%'
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5
  }
})