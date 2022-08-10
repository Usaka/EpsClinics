import React, { useEffect, useState } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, PermissionsAndroid,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { Picker } from '@react-native-picker/picker';

import HospitalCard from '../components/elements/HospitalCard';
import {
  Containers, BgView, Fonts, Spacing,
} from '../styles';

import { GetHospitals } from '../api/hospitals';
import { GetEps } from '../api/eps';
import { AlertOk } from '../components/alerts';

export default function User() {
  const [hospitals, setHospitals] = useState([]);
  const [epsList, setEpsList] = useState([]);
  const [eps, setEps] = useState('');
  const [position, setPosition] = useState();

  useEffect(() => {
    if (epsList.length === 0) {
      GetEps()
        .then((epsListApi) => {
          if (epsListApi.length === 0) {
            AlertOk('EPS', 'No pudimos obtener la lista de eps', 'Ok');
          }

          setEpsList(epsListApi);
        });
    }

    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permisos de Ubicación',
        message:
          'Cool Photo App needs access to your camera '
          + 'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    ).then((access) => {
      if (access === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(({ coords }) => {
          setPosition({ lat: coords.latitude, lon: coords.longitude });
        });
      } else {
        AlertOk('GPS', 'Se necesita permisos en la ubicación para contrastar con las clinica', 'Ok');
      }
    });
  });

  const deg2rad = (value) => {
    const radians = (value * Math.PI) / 180;
    return radians;
  };

  const rad2deg = (value) => {
    const degrees = (value * 180) / Math.PI;
    return degrees;
  };

  const SearchHospital = () => {
    if (position) {
      GetHospitals()
        .then((hospitalsList) => {
          if (!hospitalsList) {
            AlertOk('Hospitales Cercanos', 'No hay hospitales cercanos para esta EPS', 'Reintentar');
          }

          const hospitalsListDistance = hospitalsList.map((hospital) => {
            const theta = position.lon - hospital.lon;
            let distance = (Math.sin(deg2rad(position.lat))
            * Math.sin(deg2rad(hospital.lat))) + (Math.cos(deg2rad(position.lat))
            * Math.cos(deg2rad(hospital.lat)) * Math.cos(deg2rad(theta)));

            distance = Math.acos(distance);
            distance = rad2deg(distance);
            distance = distance * 60 * 1.1515;
            distance *= 1.609344;

            return {
              ...hospital,
              distance,
            };
          }).sort((s1, s2) => s1.distance > s2.distance);

          setHospitals(hospitalsListDistance);
        });
    } else {
      AlertOk('GPS', 'No se tiene la ubicación del usuario', 'Ok');
    }
  };

  const ClearList = () => {
    setHospitals([]);
  };

  return (
    <View style={[Containers.fullView, BgView.bgBlue]}>
      <View style={[Spacing.mt10, Spacing.mh2]}>
        <Text style={[Fonts.fontLink, Fonts.fontBigger]}>
          Datos Del Usuario
        </Text>
        <View style={[Containers.fRow]}>
          <Text style={Fonts.fontLink}>
            Identificación:
          </Text>
          <Text style={Fonts.fontGray}>
            111
          </Text>
        </View>
        <View style={[Containers.fRow]}>
          <Text style={Fonts.fontLink}>
            Nombre del usuario:
          </Text>
          <Text style={Fonts.fontGray}>
            111
          </Text>
        </View>
        {hospitals.length === 0 ? (
          <View>
            <View style={[Spacing.mt10]}>
              <Text style={Fonts.fontLink}>
                Indicanos que EPS tienes:
              </Text>
              <Picker
                selectedValue={eps}
                onValueChange={(itemValue) => setEps(itemValue)}
              >
                {epsList.length > 0 ?? (
                  epsList.map((item) => <Picker.Item label={item.name} value={item.id} />)
                )}
              </Picker>
            </View>
            <View style={[Containers.alignCenter, Spacing.mt10]}>
              <TouchableOpacity style={Containers.primaryBtnBigger} onPressOut={SearchHospital}>
                <Text style={Fonts.fontPrimaryBtn}>
                  Buscar Hospital Mas Cercano
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={[Spacing.mt5]}>
            <TouchableOpacity style={[Spacing.mb2]} onPressOut={ClearList}>
              <Text style={Fonts.fontLink}>
                Volver a Consultar
              </Text>
            </TouchableOpacity>
            <View style={[Containers.alignCenter]}>
              <ScrollView style={[Containers.card]}>
                {hospitals.map((hospital) => (
                  <HospitalCard
                    id={hospital.id}
                    image={hospital.image}
                    name={hospital.name}
                    address={hospital.address}
                    distance={hospital.distance}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
