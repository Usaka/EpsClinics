import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

import {
  Containers, Fonts, Spacing,
} from '../../styles';

function HospitalCard({
  id, image, name, address, distance,
}) {
  return (
    <TouchableOpacity key={id} style={[Containers.cardHospital, Containers.fRow]}>
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
};

export default HospitalCard;
