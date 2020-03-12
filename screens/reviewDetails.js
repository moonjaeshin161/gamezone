import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';


export default function ReviewDetails({ route }) {
    const review = route.params;
    const { name, rating, body } = review;
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.textTitle}>{name}</Text>
            <Text>{body}</Text>
            <View style={styles.container}>
                <Text>AD's rating: </Text>
            </View>
            <Image source={images.ratings[rating]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#333',
        borderBottomWidth: 1
    }
});
