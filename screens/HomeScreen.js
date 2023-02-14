import React, {useLayoutEffect} from 'react';
import { SafeAreaView, TextInput, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native'
import SafeViewAndroid from "../components/SafeViewAndroid";
import { ChevronDownIcon, UserIcon, SearchIcon } from "react-native-heroicons/outline";
import Ionicons from '@expo/vector-icons/Ionicons';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

export default function HomeScreen({ }) {
  const navigation = useNavigation();

  //In side this, is what happens when the screen is mounted/rendered - similar to useEffect in React
  useLayoutEffect(() => {
    //this allows to modify the default react native layout
    navigation.setOptions(
        {
          //headerTitle: "Testing",
          headerShown: false,
        }
    )
  
  }, [])

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea} className="bg-white pt-5">
      {/* HEADER */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now
            </Text>
            <Text className="font-bold text-xl">Current Location
                <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
            <UserIcon size={35} color="#00CCBB" />
          
        </View>
              {/* SEARCH */}
          
          <View className="flex-row items-center space-x-2 pb-3 mx-4">
              <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                <Ionicons name="search" size={30} color="gray" /> 
                <TextInput
                    placeholder="Restaurants and cuisines"
                   keyboardType="default"
                />
                
              </View>
              <Ionicons name="list" size={30} color="#00CCBB" />
        </View>
            { /* Body */}
          <ScrollView
            className="bg-gray-100"
            contentContainerStyle={
              {paddingBottom: 100,}
            }
          >
            { /* Categories */}
              <Categories />

              { /* Featured Rows */}
              <FeaturedRow
                  title="Featured"
                  description="Paid placements from our partners"
              />
              <FeaturedRow
                  title="Tasty Discounts"
                  description="Paid placements from our partners"
              />
              <FeaturedRow
                  title="Offers near you"
                  description="Paid placements from our partners"
              />
          </ScrollView>
            
    </SafeAreaView>
  );
}
