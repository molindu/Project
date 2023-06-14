import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { MainStackParamList, DetailsScreenRouteProp } from '../types/navigation';

const Details = ({navigation}:NativeStackScreenProps<MainStackParamList>) => {

  const route = useRoute<DetailsScreenRouteProp>();

  return (
    <View>
      <Text>Details</Text>
      <Text>{route.params.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default Details;
