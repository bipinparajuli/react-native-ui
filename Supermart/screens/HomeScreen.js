import React from 'react'
import { SafeAreaView,View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

export default function HomeScreen() {
    return (
       <View>
       <SafeAreaView>
<View>
            <View>
                <View>
                    <Icon size={25} name="map-pin"></Icon>
            </View>
            <Text>Delivery to</Text>
            <Text>63, St, Clira, NYC</Text>
            </View>
</View>
<View>
    <Image source={require("../assets/images/person.jpg")} />
</View>
        </SafeAreaView>
        </View>
        
    )
}
