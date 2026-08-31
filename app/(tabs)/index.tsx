import { Text, View, StyleSheet, Pressable, Image, ScrollView } from 'react-native'

export default function index() {
    return (
        <ScrollView style={style.container}>
            <View style={style.navBar}>
                <View><Text style={{fontWeight:"bold",fontSize:36}}>Titulo</Text></View>
                <View style={style.navOpt}>
                    <Pressable><Text>nav</Text></Pressable>
                    <Pressable><Text>nav</Text></Pressable>
                    <Pressable><Text>nav</Text></Pressable>
                </View>
            </View>
            <View style={style.carrossel}>
                <Text style={{fontWeight:"bold",fontSize:20}}>Destaque do mês:</Text>
                <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNBLHOGwbG4J61AIcIwjO9eKORkaX5_GC31KDgOtKzA&s=10'}} style={style.imgCaroossel} />            
            </View>
            <View style={style.catalogo}>
                <Text style={{fontWeight:"bold",fontSize:20}}>categoria 1</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.categoria}>
                    {/* componentizar tudo e lembrar de fazer Pressable*/}
                </ScrollView>
                <Text style={{fontWeight:"bold",fontSize:20}}>categoria 2</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.categoria}>
                    {/* componentizar tudo e lembrar de fazer Pressable*/}
                </ScrollView>
                <Text style={{fontWeight:"bold",fontSize:20}}>categoria 3</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.categoria}>
                    {/* componentizar tudo e lembrar de fazer Pressable*/}
                </ScrollView>
                <Text style={{fontWeight:"bold",fontSize:20}}>categoria 4</Text>
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
        backgroundColor: "beige",
    },
    navBar: {
        width: "100%",
        height: 150,
        padding: 20,
        backgroundColor: "green",
        display:"flex",
        alignItems: "flex-start",
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
        height: "65%",
        margin: 15,
        justifyContent:"space-between",
        alignItems:"flex-start"
    },
    imgCaroossel: {
        width:"100%",
        height:"80%",
        borderRadius: 10
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
        gap:5,
        display:"flex",
        flexDirection:"row",
        flexWrap:"nowrap",

        
    }
})