import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import React from 'react'


const FoodTypes = () => {
    
    const types = [
        {
            id:"0",
            image:'https://raw.githubusercontent.com/KA1PE5H/frocker-native-main/main/assets/salad.png?token=GHSAT0AAAAAAB65ZMCRRVQDI2NBSYEWJXK2Y7RXUPA',
            name:"Salad",
        },
        {
            id:"1",
            image:"https://raw.githubusercontent.com/KA1PE5H/frocker-native-main/main/assets/barbecue.png?token=GHSAT0AAAAAAB65ZMCQOCFIVQA6PSWA7EO2Y7RXVCA",
            name:"Barbecue"
        },
        {
            id:"2",
            image:"https://raw.githubusercontent.com/KA1PE5H/frocker-native-main/main/assets/pancakes.png?token=GHSAT0AAAAAAB65ZMCRE4F5FQEYIBLCC4H4Y7RXVQA",
            name:"Pancakes"
        },
        {
            id:"3",
            image:"https://raw.githubusercontent.com/KA1PE5H/frocker-native-main/main/assets/burger.png?token=GHSAT0AAAAAAB65ZMCR2FSXYSHT5F5FW6JAY7RXV3A",
            name:"Burger",

        },
        {
            id:"4",
            image:"https://raw.githubusercontent.com/KA1PE5H/frocker-native-main/main/assets/nuggets.png?token=GHSAT0AAAAAAB65ZMCQGYW2PNLHAQHPIWDYY7RXWHA",
            name:"Nuggets"
        },
        {
            id:"5",
            image:"https://raw.githubusercontent.com/KA1PE5H/frocker-native-main/main/assets/icecream.png?token=GHSAT0AAAAAAB65ZMCRVAZESOUXUQIR4AIUY7RXWXA",
            name:"Ice-creams"
        }
    ]

  return (
    
    <View>
        <Text style={{ margin:20,fontSize: 14,textAlign: 'center', fontWeight: "700" , font: "Nunito"}}>Want to try any of these?</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        
        {types.map((item,index) => (
            <View style={{display:"flex",margin:10}} key={index}>
                <Image source={{uri:item.image}} style={{width:160,height:160,borderRadius:30}}/>
                <Text style={{marginTop:6,textAlign:"center"}}>{item.name}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default FoodTypes

const styles = StyleSheet.create({})