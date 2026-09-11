import { films } from '@/data/films';
import { router, useLocalSearchParams } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function filme() {
    const { id } = useLocalSearchParams();

    const film = films.find(
        (film) => film.id === Number(id)
    );

    if (!film) {
        return (
        <View style={style.container}>
            <Text style={style.text}>Filme não encontrado.</Text>
        </View>
        );
    }

    const recommendedFilms = films.filter(
        (otherFilm) => otherFilm.category === film.category && otherFilm.id !== film.id
    );

    return (
        <ScrollView style={style.container}>
            <Pressable onPress={() => router.back()}>
                <Text style={style.navBar}>Voltar</Text>
            </Pressable>
            <View style={style.details}>
                <Image source={{ uri: film.image }} style={style.image} />
                <Text style={style.title}>{film.title}</Text>
                <Text style={style.category}>{film.category}</Text>
                <Text style={style.description}>{film.description}</Text>
            </View>

            {recommendedFilms.length > 0 && (
                <View style={style.recommendations}>
                    <Text style={style.recommendationsTitle}>Você também pode gostar</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {recommendedFilms.map((recommendedFilm) => (
                            <Pressable
                                key={recommendedFilm.id}
                                style={style.recommendedFilm}
                                onPress={() => router.push(`./${recommendedFilm.id}`)}
                            >
                                <Image
                                    source={{ uri: recommendedFilm.image }}
                                    style={style.recommendedImage}
                                />
                                <Text style={style.recommendedTitle} numberOfLines={2}>
                                    {recommendedFilm.title}
                                </Text>
                            </Pressable>
                        ))}
                    </ScrollView>
                </View>
            )}
        </ScrollView>
    )
}

const style = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: "#1e2d2f",
    },
    navBar: {
        width: "100%",
        height: 40,
        padding: 20,
        backgroundColor: "#201e2f",
        display:"flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        color: "#e7dca8",
    },
    text: {
        color:"#e7dca8",
        fontSize: 18,
    },
    back: {
        color: "#e7dca8",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 20,
    },
    details: {
        width: "100%",
        borderRadius: 18,
        padding: 16,
        alignItems: "center",
    },
    image: {
        width: "110%",
        height: 380,
        
    },
    category: {
        alignSelf: "flex-start",
        color: "#d3c97a",
        fontSize: 14,
        marginTop: 12,
        textTransform: "uppercase",
    },
    title: {
        alignSelf: "flex-start",
        color: "#e7dca8",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 6,
    },
    description: {
        alignSelf: "flex-start",
        color: "#d5d1c2",
        fontSize: 16,
        lineHeight: 24,
        marginTop: 12,
    },
    recommendations: {
        marginTop: 12,
        padding: 16,
    },
    recommendationsTitle: {
        color: "#e7dca8",
        fontSize: 21,
        fontWeight: "bold",
        marginBottom: 14,
    },
    recommendedFilm: {
        marginRight: 14,
        width: 130,
    },
    recommendedImage: {
        height: 180,
        width: 130,
    },
    recommendedTitle: {
        color: "#e7dca8",
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 8,
    }
})