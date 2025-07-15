import { View, Text, TextInput, Pressable, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { IconSave } from '../../components/icons'



export default function AddTasks() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

      <View style={styles.inner}>
      <Text style={styles.text}>Adicionar uma Tarefa</Text>
        <Text style={styles.label}>
          Em que você está trabalhando?
        </Text>
        <TextInput
          style={styles.input}
          numberOfLines={10}
          multiline={true}
          h
        />

        <View style={styles.actions}>
          <Pressable style={styles.button}>
            <IconSave />
            <Text>Salvar</Text>
          </Pressable>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021123',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 26,
  },
  label: {
    fontSize: 18,
    fontWeight: 600
  },
  input: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    height: 100

  },

  inner: {
    backgroundColor: '#98A0a8',
    width: '90%',
    borderRadius: 8,
    padding: 16,
    gap: 32,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})