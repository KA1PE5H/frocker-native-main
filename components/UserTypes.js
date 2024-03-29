import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import React from 'react'

const UserTypes = () => {
    
    const utypes = [
        {
            id:"0",
            image:"https://raw.githubusercontent.com/KA1PE5H/frocker-native-main/main/assets/u1.png?token=GHSAT0AAAAAAB65ZMCQEMQQNA7X22OZ7GC4Y7RXQWA",
            name:"Sophia",
        },
        {
            id:"1",
            image:"https://raw.githubusercontent.com/KA1PE5H/frocker-native-main/main/assets/u2.png?token=GHSAT0AAAAAAB65ZMCRWBJDD37E2JKHUOBYY7RXSTQ",
            name:"Max"
        },
        {
            id:"2",
            image:"https://raw.githubusercontent.com/KA1PE5H/frocker-native-main/main/assets/u3.png?token=GHSAT0AAAAAAB65ZMCRJLFVMJ72CZSFKL5CY7RXTBQ",
            name:"Richa"
        },
        {
            id:"3",
            image:"https://raw.githubusercontent.com/KA1PE5H/frocker-native-main/main/assets/u4.png?token=GHSAT0AAAAAAB65ZMCQSDXX6Z7CMSEWJBJGY7RXTPQ",
            name:"Ashley",

        },
        {
            id:"4",
            image:"https://raw.githubusercontent.com/KA1PE5H/frocker-native-main/main/assets/u5.png?token=GHSAT0AAAAAAB65ZMCRD6Y55L5BPGS3PXQKY7RXT3A",
            name:"James"
        }
    ]

  return (
    
    <View>
        <Text style={{ margin:20,fontSize: 14,textAlign: 'center', fontWeight: "700" }}>Try from our top Frokers</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        
        {utypes.map((item,index) => (
            <View style={{margin:10}} key={index}>
                <Image source={{uri:item.image}} style={{width:60,height:60,borderRadius:30}}/>
                <Text style={{marginTop:6,textAlign:"center"}}>{item.name}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default UserTypes

const styles = StyleSheet.create({})