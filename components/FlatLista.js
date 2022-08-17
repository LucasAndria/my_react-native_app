import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function Home() {
    const [people, setPeople] = useState([
        { name: 'Shan', key: '1' },
        { name: 'mario', key: '2' },
        { name: 'luigy', key: '3' },
    ])

    return (
        <View>
            <FlatList
                data={people}
                renderItem={({ item }) => (
                    <Text style={style.item}>{item.name}</Text>
                )}
            />
        </View>
    )
}