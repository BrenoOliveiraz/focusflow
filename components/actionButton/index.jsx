
import { View, Text, Pressable, StyleSheet } from 'react-native'

export default function ActionButton({ active, onPress, display }) {
    return (
        <Pressable
            style={active}
            onPress={onPress}
        >
            <Text style={styles.contextButtonText}>
                {display}
            </Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    contextButtonActive: {
        backgroundColor: '#144480',
        borderRadius: 8,
    }
    ,
    contextButtonText: {
        fontSize: 12.5,
        color: '#fff',
        padding: 8

    },
})