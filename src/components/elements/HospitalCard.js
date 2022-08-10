import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {
  Containers, Fonts, Spacing,
} from '../../styles';

function HospitalCard({
  id, image, name, address, distance, lat, lon, userLat, userLon,
}) {
  const nav = useNavigation();

  const GoHospital = (hospital) => {
    nav.navigate('MODALHOSPITAL', { hospital, position: { userLat, userLon } });
  };

  return (
    <TouchableOpacity
      key={id}
      style={[Containers.cardHospital, Containers.fRow]}
      onPress={() => GoHospital({
        id, image, name, address, distance, lat, lon, userLat, userLon,
      })}
    >
      <View>
        <Image
          source={{ uri: `${image}` }}
          style={[Containers.imageHospital, Spacing.m1]}
        />
      </View>
      <View style={[Spacing.mv1]}>
        <Text style={[Fonts.fontGray]}>
          {name}
        </Text>
        <Text style={[Fonts.fontGray]}>
          {address}
        </Text>
        <Text style={[Fonts.fontGray]}>
          {`${distance.toFixed(2)} Km`}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

HospitalCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
  userLat: PropTypes.number.isRequired,
  userLon: PropTypes.number.isRequired,
};

export default HospitalCard;
