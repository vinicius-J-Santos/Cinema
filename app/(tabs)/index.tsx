import { Text, View, StyleSheet, Pressable, Image, ScrollView } from 'react-native'
import { films } from '@/data/films';
import { router } from 'expo-router';

export default function index() {
    const terrorFilms = films.filter((film) => film.category === "Terror");
    const actionFilms = films.filter((film) => film.category === "Ação");
    const comedyFilms = films.filter((film) => film.category === "Comédia");
    const documentaryFilms = films.filter((film) => film.category === "Documentário");

    return (
        <ScrollView style={style.container}>
            <View style={style.navBar}>
                <View><Text style={{fontWeight:"bold",fontSize:36,color:"#fff279ff"}}>C!NEMA</Text></View>
                <View style={style.navOpt}>
                    <Pressable><Text style={style.text}>Catalogo</Text></Pressable>
                    <Pressable><Text style={style.text}>Cinemas</Text></Pressable>
                    <Pressable><Text style={style.text}>Ajuda</Text></Pressable>
                </View>
            </View>
            <View style={style.carrossel}>
                <Text style={{fontWeight:"bold",fontSize:22,color:"#fff279ff"}}>Destaque do mês:</Text>
                <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNBLHOGwbG4J61AIcIwjO9eKORkaX5_GC31KDgOtKzA&s=10'}} style={style.imgCaroossel} />            
            </View>
            <View style={style.catalogo}>
                <Text style={{fontWeight:"bold",alignSelf:"center",fontSize:22,color:"#fff279ff"}}>Catálogo de Filmes</Text>
                <Text style={{fontWeight:"bold",fontSize:20,color:"#fff279ff"}}>Ação</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.categoria}>
                    {actionFilms.map((film) => (
                        <Pressable style={style.filmItem} key={film.id} onPress={() => router.push(`./${film.id}`)}>
                            <Image source={{uri: film.image}} style={{width: 150, height: 150}} />
                            <Text style={style.filmeTitulo}>{film.title}</Text>
                        </Pressable>
                    ))}
                </ScrollView>
                <Text style={{fontWeight:"bold",fontSize:20,color:"#fff279ff"}}>Terror</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.categoria}>
                    {terrorFilms.map((film) => (
                        <Pressable style={style.filmItem} key={film.id} onPress={() => router.push(`./${film.id}`)}>
                            <Image source={{uri: film.image}} style={{width: 150, height: 150}} />
                            <Text style={style.filmeTitulo}>{film.title}</Text>
                        </Pressable>
                    ))}
                </ScrollView>
                <Text style={{fontWeight:"bold",fontSize:20,color:"#fff279ff"}}>Comédia</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.categoria}>
                    {comedyFilms.map((film) => (
                        <Pressable style={style.filmItem} key={film.id} onPress={() => router.push(`./${film.id}`)}>
                            <Image source={{uri: film.image}} style={{width: 150, height: 150}} />
                            <Text style={style.filmeTitulo}>{film.title}</Text>
                        </Pressable>
                        ))}
                </ScrollView>
                <Text style={{fontWeight:"bold",fontSize:20,color:"#fff279ff"}}>Documentário</Text>
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
        backgroundColor: "#1d79f2ff"
    },
    text: {
        color:"#fff279ff",
        fontSize: 18
    },
    navBar: {
        width: "100%",
        height: 150,
        padding: 20,
        backgroundColor: "#1a05a1ff",
        display:"flex",
        alignItems: "flex-start",
        justifyContent: "space-between"
    },
    navOpt: {
        backgroundColor: "#0f0274ff",
        width: "100%",
        padding: 5,
        borderRadius: 10,
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    carrossel: {
        backgroundColor: "#1a05a1ff",
        height: 300,
        padding:15,
        margin: 10,
        borderRadius: 20,
        justifyContent:"space-between",
        alignItems:"flex-start"
    },
    imgCaroossel: {
        width:"100%",
        height:"80%",
        borderRadius: 10
    },
    catalogo: {
        backgroundColor: "#1a05a1ff",
        margin: 10,
        padding: 15,
        borderRadius: 20,
        display:"flex",
        justifyContent: "space-between",
        alignContent: "center"
    },
    categoria: {
        marginTop: 5,
        marginBottom: 10,
        gap:5,
        display:"flex",
    },

    filmItem: {
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        marginRight: 10,
        backgroundColor: "rgb(104, 55, 238)"
    },
    filmeTitulo: {
        color:"#fff279ff",
        fontSize: 16,
        fontWeight: "bold"
    }
})