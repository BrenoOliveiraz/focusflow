import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { IconCheck, IconPencil, IconTrash } from '../icons'


export default function TaskItem({
    completed,
    text,
    onToggleComplete,
    onPressEdit,
    onPressDelete
}) {


    const cardStyles= [styles.card]
    if(completed){
        cardStyles.push(styles.cardCompleted)
    }


    return (
        <View style={cardStyles}>

            <Pressable onPress={onToggleComplete}>
                <IconCheck completed={completed} />
            </Pressable>

            <Text style={styles.text}>
                {text}
            </Text>

            <Pressable onPress={onPressEdit}>
                <IconPencil />
            </Pressable>

            <Pressable onPress={onPressDelete}>
                <IconTrash />
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({ 
    card: {
        flexDirection: 'row',
        backgroundColor: '#98A0AB',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingHorizontal: 8,
        paddingVertical: 18,
        borderRadius: 8,
        gap: 8,
    },
    cardCompleted:{
        backgroundColor: '#0f725c'
    },
    text: {
        flex: 1,
        color: '#021123',
        fontSize: 18,
        fontWeight: 'bold'
    }
})