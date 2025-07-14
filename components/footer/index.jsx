import { View, Text, StyleSheet } from 'react-native'
export default function index() {
  return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Foco é poder. Crie, produza, descanse.
        </Text>
      </View>
  )
}


const styles = StyleSheet.create({
  

  footer: {
    width: '80%'
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5
  }
})