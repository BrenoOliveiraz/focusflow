import { View, Text , TextInput, Pressable} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function AddTasks() {
  return (
    <SafeAreaView>
      <Text>Adicionar uma Tarefa</Text>
      <View>
        <Text>
          Em que você está trabalhando?
        </Text>
        <TextInput />
        <Pressable>
          Salvar
        </Pressable>
      </View>
    </SafeAreaView>
  )
}