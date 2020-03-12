import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Card(props) {
    return (
        <View style={styles.container}>
            <View style={styles.children}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'coral',
        borderWidth: 1,
        height: 80,
        padding: 5,
        margin: 10
    },
    children: {
        alignItems: 'center',
    }
})