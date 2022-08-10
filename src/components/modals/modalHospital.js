import { useRoute } from '@react-navigation/native';
import React from 'react';
import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';
import { Containers, Fonts, Spacing } from '../../styles';

function Modal() {
  const route = useRoute();

  const { hospital, position } = route.params;

  const StartRoute = () => {
    Linking.openURL(`https://www.google.com/maps/dir/${position.userLat},${position.userLon}/${encodeURIComponent(hospital.name)}/@${hospital.lat},${hospital.lon}`);
  };

  return (
    <View style={[Containers.modal]}>
      <View style={[Containers.cardViewHospital]}>
        <View>
          <Image
            source={{ uri: `${hospital.image}` }}
            style={[Containers.imageFull]}
          />
        </View>
        <View style={[Spacing.mv1, Spacing.ml2]}>
          <Text style={[Fonts.fontGray]}>
            {`Nombre: ${hospital.name}`}
          </Text>
          <Text style={[Fonts.fontGray]}>
            {`Dirección: ${hospital.address}`}
          </Text>
          <Text style={[Fonts.fontGray]}>
            {`Distancia: ${hospital.distance.toFixed(2)} Km`}
          </Text>
          <Text style={[Fonts.fontGray]}>
            {`Latitud: ${hospital.lat}°`}
          </Text>
          <Text style={[Fonts.fontGray]}>
            {`Longitud: ${hospital.lon}°`}
          </Text>
        </View>
        <View style={[Containers.alignCenter, Spacing.mt5]}>
          <TouchableOpacity
            style={[Containers.justifyCenter, Containers.alignCenter, Containers.circleBtn]}
            onPressOut={StartRoute}
          >
            <Text style={[Fonts.fontGray, Fonts.fontBigger]}>
              GO!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Modal;
