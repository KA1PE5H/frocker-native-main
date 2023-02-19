import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import React from 'react'

const FoodCategories = () => {
    
    const types = [
        {
            id:"0",
            name:"All",
        },
        {
            id:"1",
            name:"Popular"
        },
        {
            id:"2",
            name:"Vegetarian"
        },
        {
            id:"3",
            name:"Non-Veg",

        },
        {
            id:"4",
            name:"Offers"
        }
    ]

  return (
    
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        
        {types.map((item,index) => (
            <View style={{margin:11}} key={index}>
                <Text style={{marginTop:6,textAlign:"center",fontSize: 17,color:"#808080"}}>{item.name}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default FoodCategories

const styles = StyleSheet.create({})