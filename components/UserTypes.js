import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import React from 'react'

const UserTypes = () => {
    
    const utypes = [
        {
            id:"0",
            image:"../assets/u1.png",
            name:"Sophia",
        },
        {
            id:"1",
            image:"../assets/u1.png",
            name:"Max"
        },
        {
            id:"2",
            image:"../assets/u1.png",
            name:"Richa"
        },
        {
            id:"3",
            image:"../assets/u1.png",
            name:"Ashley",

        },
        {
            id:"4",
            image:"../assets/u1.png",
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