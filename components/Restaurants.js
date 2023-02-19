import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import React from 'react'
import hotels from "../data/hotels";
const Restaurants = () => {
    
    const data = hotels
  return (
    
    <View>
        <Text style={{ margin:20,fontSize: 14,textAlign: 'center', fontWeight: "700" , font: "Nunito"}}>Pick from our best restaurant</Text>
     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        
        {data.map((item,index) => (
            <View style={{display:"flex",margin:10}} key={index}>
                <Image source={{uri:item.image}} style={{width:160,height:160,borderRadius:30}}/>

            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Restaurants

const styles = StyleSheet.create({})