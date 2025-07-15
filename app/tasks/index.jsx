import { View, Text, StyleSheet } from 'react-native'

import TaskItem from '../../components/taskItem'
import FocusButton from '../../components/focusButton'
import { IconPlus } from '../../components/icons'
import { router } from 'expo-router'

export default function Tasks() {
  return (
    <View style={styles.container}>
      <View style={styles.wraper}>
        <Text>Lista de Tarefas</Text>

        <View style={styles.inner}>
          <TaskItem completed text='ESTUDAR' />
          <TaskItem text='TRABALHAR' />
        </View>
        <FocusButton
          title='Adicionar nova Tarefa'
          icons={<IconPlus />}
          outline
          onPress={()=>router.navigate('/add-task')}
          
          />
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
   alignItems: 'center'
  },
  wraper:{
    gap: 40,
    width: "90%"
  },
  text: {
    alignItems: 'center',
    fontSize: 26,
    color: '#fff'
  },
  inner: {
    gap: 8
  },

})