
import { View, Text, Pressable, StyleSheet } from 'react-native'
export default function FocusButton({onPress, title, icons}) {
  return (
        <Pressable
        onPress={onPress}
        style={styles.button}>
          {icons}
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
    padding: 8,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: "center",
    color: '#021123',
    fontSize: 18,

  }
})