
import { View, Text, Pressable, StyleSheet } from 'react-native'
export default function FocusButton({onPress, title}) {
  return (
        <Pressable
        onPress={onPress}
        style={styles.button}>
          <Text style={styles.buttonText}>
            {title}
          </Text>
        </Pressable>
  )
}


const styles = StyleSheet.create({

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