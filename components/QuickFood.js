import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import quickfood from "../data/quickfood";
import { MaterialIcons } from "@expo/vector-icons";

const QuickFood = () => {
  const data = quickfood;
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ margin:20,fontSize: 14,textAlign: 'center', fontWeight: "700" , font: "Nunito"}}>Here is A Small Sneak Peak...</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Pressable style={{ margin: 3 }} key={index}>
            <ImageBackground
              imageStyle={{ borderRadius: 0 }}
              style={{ width:100, height: 200 }}
              source={{ uri: item.image }}
            >
              <Text
                style={{
                  position: "absolute",
                  bottom: 15,
                  left: 4,
                  fontSize: 10,
                  fontWeight: "400",
                  color: "white",
                }}
              >
                {item.description}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  bottom: 2,
                  left: 4,
                  fontSize: 10,
                  fontWeight: "400",
                  color: "white",
                }}
              >
                {item.views} Views
              </Text>
            </ImageBackground>
            
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default QuickFood;

const styles = StyleSheet.create({});
