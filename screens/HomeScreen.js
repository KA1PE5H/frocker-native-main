import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import PagerView from 'react-native-pager-view';
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import FoodTypes from "../components/FoodTypes";
import FoodCategories from "../components/FoodCategories";
import QuickFood from "../components/QuickFood";
import { Ionicons } from "@expo/vector-icons";
import hotels from "../data/hotels";
import MenuItem from "../components/MenuItem";
import HexagonalButton from "../components/Hexa";

const HomeScreen = () => {
  const data = hotels;
  return (
    
    <ScrollView style={{ marginTop: 50 }}>
      
      <View style={{
        alignItems: "center",
        width: "100%",
        display: "flex",
        height: "5%",
        flexDirection: "row",
        paddingLeft: "2%"
      }}> 
        <Image source={require('../assets/map-pin.png')}></Image>
        <View style={{display: "flex", flexDirection: "row", justifyContent: 'space-between', width: "90%", paddingRight: '3%'}}>
          <View style={{
            paddingLeft: "2%"
            }}>
            <View style={{display: "flex", flexDirection: "row", width: "30%", alignItems: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 16}}>Home</Text>
              <Image source={require('../assets/chevron-down.png')}/>
            </View>
            <Text style={{color: "grey"}}>RK Gardens, New Bel Road</Text>
          </View>
          <Image source={require('../assets/userImage.png')}/>
        </View>
      
      </View>
      {/* Search Bar  */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          borderWidth: 1,
          margin: 10,
          padding: 10,
          borderColor: "#C0C0C0",
          borderRadius: 7,
        }}
      >
        <AntDesign name="search1" size={24} color="#808080" />
        <TextInput
          style={{ fontSize: 17 }}
          placeholder="Search for Food, Restaurant, Frokers"
        />
      </View>
      

      
      <View style={{
        alignItems: "center",
        width: "100%",
        display: "flex",
        height: "5%",
        flexDirection: "row",
        paddingTop: "30%",
        paddingBottom:"40%",
        paddingLeft: "5%"
      }}> 
        <Image source={require('../assets/hex1.png')}></Image>
        
      </View>        
      <View style={{
        alignItems: "center",
        width: "100%",
        display: "flex",
        height: "5%",
        flexDirection: "row",
        paddingTop: "2%",
        paddingBottom:"40%",
        paddingLeft: "40%"
      }}> 
        <Image source={require('../assets/hex2.png')}></Image>
      </View> 
              
      <View style={{
        alignItems: "center",
        width: "100%",
        display: "flex",
        height: "5%",
        flexDirection: "row",
        paddingTop: "2%",
        paddingLeft: "47%"
      }}> 
        <Image source={require('../assets/arrow-up.png')}></Image>
      </View>   
      <Text style={{ margin:20,fontSize: 14,textAlign: 'center', fontWeight: "700"}}>Swipe up to explore</Text>
      
      {/* Food Item Types */}
      <FoodCategories />
      {/* Food Item Types */}
      <FoodTypes />
      {/* Quick Food Component */}
      <QuickFood />
      {/*<HexagonalButton />*/}
      <Text style={{ margin:20,fontSize: 14,textAlign: 'center', fontWeight: "700" , font: "Nunito"}}>Pick from our best restaurant</Text>
      {data.map((item,index) => (
        <MenuItem key={index} item={item}/>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    position: 'absolute',
    top: 200,
    right: 200,
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
