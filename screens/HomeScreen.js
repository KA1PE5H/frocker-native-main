import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import PagerView from 'react-native-pager-view';
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import { Ionicons } from "@expo/vector-icons";
import hotels from "../data/hotels";
import MenuItem from "../components/MenuItem";
import HexagonalButton from "../components/Hexa";

const HomeScreen = () => {
  const data = hotels;
  return (
    
    <ScrollView style={{ marginTop: 50 }}>
      
      {/* Search Bar  */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          margin: 10,
          padding: 10,
          borderColor: "#C0C0C0",
          borderRadius: 7,
        }}
      >
        <TextInput
          style={{ fontSize: 17 }}
          placeholder="Search for Restaurant item or more"
        />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        <AntDesign name="search1" size={24} color="#E52B50" />
      </View>
      <Image
        source={require('../assets/hex1.png')}
        style={styles.image}
      />

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
