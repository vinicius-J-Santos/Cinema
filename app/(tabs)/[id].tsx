import { Text, View } from 'react-native'
import { films } from '@/data/films';
import { useLocalSearchParams } from 'expo-router';

export default function filme() {
    const { id } = useLocalSearchParams();

    const film = films.find(
        (film) => film.id === Number(id)
    );

    if (!film) {
        return (
        <View>
            <Text>Filme não encontrado.</Text>
        </View>
        );
    }

    return (
        <View>
            <Text>{film.title}</Text>
        </View>
    )
}