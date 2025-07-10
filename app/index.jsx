import { useRef, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import FocusButton from '../components/focusButton'
import ActionButton from '../components/actionButton'
import Timer from '../components/timer'
import { IconPause, IconPlay } from '../components/icons'




const pomodoro = [
  {
    id: 'focus',
    initialValue: 25 * 60,
    image: require('./foco.png'),
    display: 'Pausa',
  },
  {
    id: 'short',
    initialValue: 5 * 60,
    image: require('./curto.png'),
    display: 'Pausa Curta',
  },
  {
    id: 'long',
    initialValue: 15 * 60,
    image: require('./longo.png'),
    display: 'Pausa Longa',
  }

]


export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0])
  const [timerRunning, setTimerRunning] = useState(false)
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue)




  const timerRef = useRef(null)

  const clear = () => {
    if (timerRef != null) {
      clearInterval(timerRef.current)
      timerRef.current = null
      setTimerRunning(false)

    }
  }

  const toogleTimerType = (newTimerType) => {
    setTimerType(newTimerType)
    setSeconds(newTimerType.initialValue)
    clear()
  }

  const toogleTimer = () => {
    if (timerRef.current) {
      clear()
      return
    }
    setTimerRunning(true)
    const id = setInterval(() => {
      setSeconds(oldState => {
        if (oldState === 0) {
          clear()
          return timerType.initialValue
        }
        return oldState - 1
      })
    }, 1000
    )
    timerRef.current = id
  }


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
              onPress={() => toogleTimerType(p)}
            />

          ))}
        </View>
        <Timer

          totalSeconds={seconds}
        />
        <FocusButton
          title={timerRunning ? 'Pausar' : 'Começar'}
          icons={timerRunning ? <IconPause /> : <IconPlay />}
          onPress={toogleTimer} />
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