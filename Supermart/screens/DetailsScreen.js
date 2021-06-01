import React from 'react'
import {Image, View, Text,SafeAreaView,TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import Icon from "react-native-vector-icons/Feather" 

const {height,widht} = Dimensions.get("window")

export default function DetailsScreen() {
    
    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:"#fff",

        },
        header:{
            backgroundColor:"#49c074",
            borderBottomLeftRadius:40,
            borderBottomRightRadius:40,

        },
        headerWrapper:{
            flexDirection:"row",
            justifyContent:"space-between",
            padding:20,
            paddingBottom:50
        },
        iconHeader:{
            color:"#fff",
        },
        contentWrapper:{
            backgroundColor:"#ecfbf1",
            marginHorizontal:20,
            paddingVertical:30,
            borderRadius:20,
            marginTop:-30
        },
        contentSubTitle:{
            fontFamily:"",
            color:"#585a58",
            fontSize:16,
            textAlign:"center"
        },
        contentTitle:{
            color:"#00312d",
            fontFamily:'Montserrat-Bold',
            fontSize:16,
            textAlign:"center"
        },
        rating:{
            flexDirection:"row",
            alignSelf:"center",
            marginTop:30
        },
        ratingStar:{
            color:"#f36040",
            marginLeft:10
        },
        contentImage:{
height:height/3,
overflow:"hidden"
        },
        contentImageWrapper:{
alignItems:"center"
        },

        qtyIncrementWrapper:{
            alignSelf:"center"
        },

qtyIncrement:{
flexDirection:"row",
alignSelf:"baseline",
backgroundColor:"#fff",
padding:10,
borderRadius:30
},
buttonQty:{
backgroundColor:"#49c074",
width:40,
height:40,
borderRadius:30,
justifyContent:"center",
alignItems:"center"

},
qtyWrapper:{
    marginHorizontal:20,
    justifyContent:"center",
    marginTop:-30
},
qty:{
    fontFamily:'Montserrat-Bold',
    fontSize:18
},
iconHeader:{
    color:"#fff"
},
contentDetailsWrapper:{
paddingHorizontal:20,
marginTop:30
},
description:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:5
},
textDescriptionTitle:{
color:"#00312d",
fontFamily:"Montserrat-Bold",
fontSize:18

},
textDescriptionSubTitle:{
color:"#803733",
fontFamily:"Montserrat-SemiBold",
fontSize:16,
},
text:{
color:"#666666",
fontFamily:"Montserrat-SemiBold",
fontSize:16
},
btn:{
backgroundColor:"#346473",
padding:10,
borderRadius:20,
marginTop:4,
},
btnText:{
color:"#fff",
fontFamily:"Montserrat-Bold",
textAlign:"center",
fontSize:16
}


    }) 
    
    return (
        <View style={styles.container}>
<SafeAreaView style={styles.header}>
    <View style={styles.headerWrapper}>
        <TouchableOpacity>
            <Icon name="chevron-left" size={24} />
        </TouchableOpacity>
        <Icon name="heart" size={24} />

    </View>
</SafeAreaView>
<View style={styles.contentWrapper}>
    <Text style={styles.contentTitle}>Fresh Lemon</Text>
    <Text style={styles.contentSubTitle}>(Numbu)</Text>
<View style={styles.rating}>
    <Icon  style={styles.ratingStar} name="star" size={20}></Icon>
    <Icon style={styles.ratingStar} name="star" size={20}></Icon>
    <Icon style={styles.ratingStar} name="star" size={20}></Icon>
    <Icon style={styles.ratingStar} name="star" size={20}></Icon>
</View>

<View style={styles.contentImageWrapper}>
    <Image 
    style={styles.contentImage}
    resizeMode="center"
     source={require("../assets/images/details.png")} 
     
     />
</View>

</View>

<View style={styles.qtyIncrementWrapper}>
    <View style={styles.qtyIncrement}>
        <View style={styles.buttonQty}>
            <Icon style={styles.iconHeader} name="minus" size={30}></Icon>
        </View>
        <View style={styles.qtyWrapper}>
<Text style={styles.qty}>500g</Text>
        </View>
        <View style={styles.buttonQty}>
            <Icon style={styles.iconHeader} name="plus" size={30}></Icon>
        </View>
    </View>
</View>
<View style={styles.contentDetailsWrapper}>
    <View style={styles.description}>
        <View>
            <Text style={styles.textDescriptionTitle}>Description</Text>
        </View>
        
        <View>
            <Text style={styles.textDescriptionSubTitle}>$30.80</Text>
        </View>
    </View>
    <View>
            <Text style={styles.text}>Lemons give a flavor to baked, good, sources, sald, dessing, marinades, drijnk & good sources of vitamin C</Text>
        </View>
<TouchableOpacity style={styles.btn}>
    <Text style={styles.btnText}>Add to basket</Text>
</TouchableOpacity>
</View>


        </View>
    )
}
