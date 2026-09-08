import { Text, View, StyleSheet, Pressable, Image, ScrollView } from 'react-native'

export default function index() {
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
                <Text style={{fontWeight:"bold",fontSize:20,color:"#fff279ff"}}>Destaque do mês:</Text>
                <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNBLHOGwbG4J61AIcIwjO9eKORkaX5_GC31KDgOtKzA&s=10'}} style={style.imgCaroossel} />            
            </View>
            <View style={style.catalogo}>
                <Text style={{fontWeight:"bold",fontSize:20,color:"#fff279ff"}}>categoria 1</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.categoria}>
                    {/* componentizar tudo e lembrar de fazer Pressable*/}
                </ScrollView>
                <Text style={{fontWeight:"bold",fontSize:20,color:"#fff279ff"}}>categoria 2</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.categoria}>
                    {/* componentizar tudo e lembrar de fazer Pressable*/}
                </ScrollView>
                <Text style={{fontWeight:"bold",fontSize:20,color:"#fff279ff"}}>categoria 3</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.categoria}>
                    {/* componentizar tudo e lembrar de fazer Pressable*/}
                </ScrollView>
                <Text style={{fontWeight:"bold",fontSize:20,color:"#fff279ff"}}>categoria 4</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.categoria}>
                    {/* componentizar tudo e lembrar de fazer Pressable*/}
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
        color:"#fff279ff"
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
        height: "65%",
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
        marginBottom: 10,
        gap:5,
        display:"flex",
        flexDirection:"row",
        flexWrap:"nowrap"
    }
})