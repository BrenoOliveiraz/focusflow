
import { View, Text, StyleSheet, FlatList } from 'react-native'

import TaskItem from '../../components/taskItem'
import FocusButton from '../../components/focusButton'
import { IconPlus } from '../../components/icons'
import { router } from 'expo-router'
import useTaskContext from '../../components/context/useTaskContext'

export default function Tasks() {

  const { tasks, deleteTask, toggleTaskCompleted,  } = useTaskContext()

  



  return (
    <View style={styles.container}>
      <View style={styles.wraper}>


        <View style={styles.inner}>

          <FlatList
            data={tasks}
            renderItem={({ item }) => <TaskItem 
            completed={item.completed}
             text={String(item.description || '')} 
             onPressDelete={()=>deleteTask(item.id)}
             onToggleComplete={()=> toggleTaskCompleted(item.id)}
             onPressEdit={()=> router.navigate(`/edit-task/${item.id}`)}
             />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            ListHeaderComponent={() => <Text style={styles.text}>Lista de Tarefas</Text>}
            ListFooterComponent={() =>
              <View style={{ marginTop: 16 }}>
                <FocusButton
                  title='Adicionar nova Tarefa'
                  icons={<IconPlus />}
                  outline
                  onPress={() => router.navigate('/add-task')}
                />

              </View>}
          />
        </View>

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
  wraper: {
    gap: 40,
    width: "90%"
  },
  text: {
    textAlign: 'center',
    fontSize: 26,
    color: '#fff',
    marginBottom: 16
  },
  inner: {
    gap: 8
  },

})