import { films } from '@/data/films';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

export default function index() {
    const { width: screenWidth } = useWindowDimensions();
    const carouselRef = useRef<ScrollView>(null);
    const [activeHighlight, setActiveHighlight] = useState(0);

    const terrorFilms = films.filter((film) => film.category === "Terror");
    const actionFilms = films.filter((film) => film.category === "Ação");
    const comedyFilms = films.filter((film) => film.category === "Comédia");
    const documentaryFilms = films.filter((film) => film.category === "Documentário");
    const highlightFilms = films.slice(0, 4);
    const highlightCardWidth = screenWidth - 40;

    const scrollToHighlight = (index: number) => {
        const nextIndex = Math.max(0, Math.min(index, highlightFilms.length - 1));
        setActiveHighlight(nextIndex);
        carouselRef.current?.scrollTo({
            x: nextIndex * highlightCardWidth,
            animated: true,
        });
    };

    return (
        <ScrollView style={style.container}>
            <View style={style.navBar}>
                <Text style={style.logo}>C!NEMA</Text>
                <View style={style.navOpt}>
                    <Pressable style={style.activeNavItem}>
                        <Text style={style.navText}>Catálogo</Text>
                    </Pressable>
                    <Pressable style={style.navItem}>
                        <Text style={style.navText}>Ajuda</Text>
                    </Pressable>
                </View>
            </View>
            <View style={style.carrossel}>
                <View style={style.carouselHeader}>
                    <Text style={style.sectionTitle}>Destaques do mês</Text>
                    <View style={style.carouselNavigation}>
                        <Pressable style={style.carouselButton} onPress={() => scrollToHighlight(activeHighlight - 1)}>
                            <Text style={style.carouselButtonText}>‹</Text>
                        </Pressable>
                        <Pressable style={style.carouselButton} onPress={() => scrollToHighlight(activeHighlight + 1)}>
                            <Text style={style.carouselButtonText}>›</Text>
                        </Pressable>
                    </View>
                </View>

                <ScrollView
                    ref={carouselRef}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(event) => {
                        const currentIndex = Math.round(event.nativeEvent.contentOffset.x / highlightCardWidth);
                        setActiveHighlight(currentIndex);
                    }}
                >
                    {highlightFilms.map((film) => (
                        <Pressable
                            key={film.id}
                            style={[style.highlightCard, { width: highlightCardWidth }]}
                            onPress={() => router.push(`./${film.id}`)}
                        >
                            <Image source={{ uri: film.image }} style={style.imgCarousel} />
                            <View style={style.highlightInfo}>
                                <Text style={style.highlightTitle}>{film.title}</Text>
                                <Text style={style.highlightDescription} numberOfLines={2}>{film.description}</Text>
                            </View>
                        </Pressable>
                    ))}
                </ScrollView>

                <View style={style.carouselDots}>
                    {highlightFilms.map((film, index) => (
                        <Pressable
                            key={film.id}
                            style={[style.dot, index === activeHighlight && style.dotActive]}
                            onPress={() => scrollToHighlight(index)}
                        />
                    ))}
                </View>
            </View>
            <View style={style.catalogo}>
                <Text style={{fontWeight:"bold",alignSelf:"center",fontSize:22,color:"#e7dca8"}}>Catálogo de Filmes</Text>
                <Text style={{fontWeight:"bold",fontSize:20,color:"#e7dca8"}}>Ação</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.categoria}>
                    {actionFilms.map((film) => (
                        <Pressable style={style.filmItem} key={film.id} onPress={() => router.push(`./${film.id}`)}>
                            <Image source={{uri: film.image}} style={{width: 150, height: 150}} />
                            <Text style={style.filmeTitulo}>{film.title}</Text>
                        </Pressable>
                    ))}
                </ScrollView>
                <Text style={{fontWeight:"bold",fontSize:20,color:"#e7dca8"}}>Terror</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.categoria}>
                    {terrorFilms.map((film) => (
                        <Pressable style={style.filmItem} key={film.id} onPress={() => router.push(`./${film.id}`)}>
                            <Image source={{uri: film.image}} style={{width: 150, height: 150}} />
                            <Text style={style.filmeTitulo}>{film.title}</Text>
                        </Pressable>
                    ))}
                </ScrollView>
                <Text style={{fontWeight:"bold",fontSize:20,color:"#e7dca8"}}>Comédia</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.categoria}>
                    {comedyFilms.map((film) => (
                        <Pressable style={style.filmItem} key={film.id} onPress={() => router.push(`./${film.id}`)}>
                            <Image source={{uri: film.image}} style={{width: 150, height: 150}} />
                            <Text style={style.filmeTitulo}>{film.title}</Text>
                        </Pressable>
                        ))}
                </ScrollView>
                <Text style={{fontWeight:"bold",fontSize:20,color:"#e7dca8"}}>Documentário</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.categoria}>
                    {documentaryFilms.map((film) => (
                        <Pressable style={style.filmItem} key={film.id} onPress={() => router.push(`./${film.id}`)}>
                            <Image source={{uri: film.image}} style={{width: 150, height: 150}} />
                            <Text style={style.filmeTitulo}>{film.title}</Text>
                        </Pressable>
                    ))}
                </ScrollView>       
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e2d2f"
    },
    text: {
        color: "#e7dca8",
        fontSize: 18
    },
    logo: {
        color: "#e7dca8",
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    navBar: {
        width: "100%",
        minHeight: 82,
        paddingHorizontal: 20,
        backgroundColor: "#201e2f",
        alignItems: "center",
        borderBottomColor: "rgba(231, 220, 168, 0.18)",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    navOpt: {
        alignItems: "center",
        flexDirection: "row",
        gap: 4,
    },
    navItem: {
        paddingHorizontal: 8,
        paddingVertical: 10,
    },
    activeNavItem: {
        borderBottomColor: "#c57b57",
        borderBottomWidth: 3,
        paddingHorizontal: 8,
        paddingVertical: 10,
    },
    navText: {
        color: "#e7dca8",
        fontSize: 15,
        fontWeight: "bold",
    },
    carrossel: {
        backgroundColor: "#2f201e",
        margin: 10,
        padding: 15,
        borderRadius: 20,
        gap: 12,
    },
    carouselHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    sectionTitle: {
        fontWeight: "bold",
        fontSize: 22,
        color: "#e7dca8",
    },
    carouselNavigation: {
        flexDirection: "row",
        gap: 8,
    },
    carouselButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "rgba(231, 220, 168, 0.15)",
        alignItems: "center",
        justifyContent: "center",
    },
    carouselButtonText: {
        color: "#e7dca8",
        fontSize: 22,
        fontWeight: "bold",
        lineHeight: 22,
    },
    highlightCard: {
        borderRadius: 16,
        overflow: "hidden",
        backgroundColor: "#201e2f",
    },
    imgCarousel: {
        width: "100%",
        height: 220,
        resizeMode: "cover",
    },
    highlightInfo: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        padding: 12,
        backgroundColor: "rgba(17, 17, 17, 0.6)",
    },
    highlightTitle: {
        color: "#f5f0d6",
        fontSize: 18,
        fontWeight: "bold",
    },
    highlightDescription: {
        color: "#e7dca8",
        fontSize: 12,
        marginTop: 4,
    },
    carouselDots: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 999,
        backgroundColor: "rgba(231, 220, 168, 0.35)",
    },
    dotActive: {
        width: 20,
        backgroundColor: "#e7dca8",
    },
    catalogo: {
        backgroundColor: "#2f201e",
        margin: 10,
        padding: 15,
        borderRadius: 20,
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center"
    },
    categoria: {
        marginTop: 5,
        marginBottom: 10,
        gap: 5,
        display: "flex",
    },

    filmItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        marginRight: 10,
        backgroundColor: "#2d2f1e"
    },
    filmeTitulo: {
        color: "#e7dca8",
        fontSize: 16,
        fontWeight: "bold"
    }
})