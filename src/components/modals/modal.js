import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { Containers, Fonts } from '../../styles';

function Modal() {
  const navigation = useNavigation();

  return (
    <View style={[Containers.modal]}>
      <View style={[Containers.cardView]}>
        <Text style={[Fonts.fontGray, Fonts.fontBigger]}>This is a modal!</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    </View>
  );
}

export default Modal;
