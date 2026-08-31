import { Text, View, StyleSheet, Pressable, Image } from 'react-native'

export default function index() {
    return (
        <View style={style.container}>
            <View style={style.navBar}>
                <View><Text style={{fontWeight:"bold",fontSize:36}}>Titulo</Text></View>
                <View style={style.navOpt}>
                    <Pressable><Text>nav</Text></Pressable>
                    <Pressable><Text>nav</Text></Pressable>
                    <Pressable><Text>nav</Text></Pressable>
                </View>
            </View>
            <View style={style.carrossel}>
                <Image source={{ uri:"https://ingresso-a.akamaihd.net/prd/img/movie/patrulha-canina-uma-aventura-dino/1a69bead-abaf-4831-ad0a-a3b98915fc4f.webp" }}></Image>
            </View>
            <View style={style.catalogo}>
                <View style={style.categoria}><Text style={{fontWeight:"bold",fontSize:20}}>categoria 1</Text>
                </View>
                <View style={style.categoria}><Text style={{fontWeight:"bold",fontSize:20}}>categoria 2</Text>
                </View>
                <View style={style.categoria}><Text style={{fontWeight:"bold",fontSize:20}}>categoria 3</Text>
                </View>
                <View style={style.categoria}><Text style={{fontWeight:"bold",fontSize:20}}>categoria 4</Text>
                </View>
                
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "beige",
    },
    navBar: {
        width: "100%",
        height: "15%",
        padding: 20,
        backgroundColor: "green",
        display:"flex",
        alignContent: "flex-end",
        justifyContent: "space-between"
    },
    navOpt: {
        backgroundColor:"red",
        width: "100%",
        gap: 5,
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    carrossel: {
        backgroundColor: "blue",
        height: "30%",
        margin: 15,
        justifyContent:"center",
        alignContent:"center"
    },
    catalogo: {
        backgroundColor: "purple",
        margin: 15,
        display:"flex",
        justifyContent: "space-between",
        alignContent: "center"
    },
    categoria: {
        marginBottom: 10,

    }
})