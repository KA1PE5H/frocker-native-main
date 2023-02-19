import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import React from 'react'

const FoodTypes = () => {
    
    const types = [
        {
            id:"0",
            image:'../assets/u1.png',
            name:"Salad",
        },
        {
            id:"1",
            image:"../assets/u1.png",
            name:"Barbecue"
        },
        {
            id:"2",
            image:"../assets/u1.png",
            name:"Pancakes"
        },
        {
            id:"3",
            image:"../assets/u1.png",
            name:"Burger",

        },
        {
            id:"4",
            image:"../assets/u1.png",
            name:"Nuggets"
        },
        {
            id:"5",
            image:"../assets/u1.png",
            name:"Ice-creams"
        }
    ]

  return (
    
    <View>
        <Text style={{ margin:20,fontSize: 14,textAlign: 'center', fontWeight: "700" , font: "Nunito"}}>Want to try any of these?</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        
        {types.map((item,index) => (
            <View style={{margin:10}} key={index}>
                <Image source={{uri:item.image}} style={{width:60,height:60,borderRadius:30}}/>
                <Text style={{marginTop:6,textAlign:"center"}}>{item.name}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default FoodTypes

const styles = StyleSheet.create({})