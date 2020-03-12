import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function Header({ title }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <MaterialIcons
                name='menu'
                size={28}
                style={styles.icon}
                onPress={() => navigation.openDrawer()} />
            <View style={styles.titleContainer}>
                <Text>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    icon: {
        marginRight: 10
    },
    titleContainer: {
        justifyContent: 'center'
    }
});