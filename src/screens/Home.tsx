import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { MainStackParamList } from '../types/navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const Home = ({navigation}: NativeStackScreenProps<MainStackParamList>) => {
  return (
    <View>
      <Text style={styles.HomeText}>Home</Text>
      <Button
        title='Go to Details'
        onPress={
          () => navigation.navigate("Details",{title:"Quester Studios"})}
      />
    </View>
  );
};
const styles = StyleSheet.create({

  HomeText: {  
    // textAlign:'center',
  },
});       

export default Home;
