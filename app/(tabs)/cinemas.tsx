import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { cinemas } from '@/data/cinema'


export default function cinems() {
    return (
        <ScrollView style={style.container}>
            <View style={style.navBar}>
                <Text style={style.logo}>C!NEMA</Text>
                <View style={style.navOpt}>
                    <Pressable style={style.navItem} onPress={() => router.back()}>
                        <Text style={style.navText}>Catálogo</Text>
                    </Pressable>
                    <Pressable style={style.activeNavItem}>
                        <Text style={style.navText}>Cinemas</Text>
                    </Pressable>
                    <Pressable style={style.navItem}>
                        <Text style={style.navText}>Ajuda</Text>
                    </Pressable>
                </View>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.categoria}>
                {cinemas.map((cinema) => (
                    <Pressable style={style.filmItem} key={cinema.idCine} onPress={() => router.push(`./${cinema.idCine}`)}>
                        <Text>{cinema.endereco}</Text>
                        <Text style={style.filmeTitulo}>{cinema.nome}</Text>
                    </Pressable>
                    ))}
            </ScrollView>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e2d2f"
    },
    text: {
        color:"#e7dca8",
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
        backgroundColor: "#2f201e",
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
        backgroundColor: "#2d2f1e"
    },
    filmeTitulo: {
        color:"#e7dca8",
        fontSize: 16,
        fontWeight: "bold"
    }
})