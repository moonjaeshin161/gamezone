import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { id: '1', rating: 5, name: 'Itaewon Class', body: 'Super good and highly recommend to see' },
        { id: '2', rating: 4, name: 'Crash landing on you', body: 'Heard peole said its good' },
        { id: '3', rating: 1, name: 'Justice League', body: 'gud trailer but the real muvie is such' },
    ])
    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <Card>
                        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                            <Text style={globalStyles.textTitle}>{item.name}</Text>
                        </TouchableOpacity>
                    </Card>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}
