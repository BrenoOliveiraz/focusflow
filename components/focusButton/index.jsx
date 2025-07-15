
import { View, Text, Pressable, StyleSheet } from 'react-native'
export default function FocusButton({onPress, title, icons, outline}) {
  return (
        <Pressable
        onPress={onPress}
        style={[styles.button, outline && styles.outlineButton]}>
          {icons}
          <Text style={[styles.buttonText, outline &&styles.outlineButtonText]}>
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
  outlineButton: {
    backgroundColor: 'transparent',
    borderColor: '#B872FF',
    borderWidth: 2,
  },
  outlineButtonText:{
    color: "#B872FF"
  },

  buttonText: {
    textAlign: "center",
    color: '#021123',
    fontSize: 18,

  }
})