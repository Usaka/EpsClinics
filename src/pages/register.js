import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text, View, TextInput, TouchableOpacity,
} from 'react-native';

import { CreateUser } from '../api/userApi';
import { AlertOk } from '../components/alerts';
import {
  Containers, BgView, Fonts, Spacing,
} from '../styles';

export default function Register() {
  const [user, setUser] = useState('');
  const [userName, setUserName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const nav = useNavigation();

  const RegisterUser = () => {
    if (!!user
      && !!userName
      && !!id
      && !!password
      && !!confirmPassword
      && password === confirmPassword) {
      CreateUser(
        id,
        user,
        userName,
        password,
      )
        .then((canCreate) => {
          if (canCreate) {
            AlertOk('Register', 'Error al registrar, quizá el usuario con ese ID ya existe', 'reintentar');
            return;
          }

          nav.navigate('LOGIN');
        });
    }
  };

  const GoBack = () => {
    nav.navigate('LOGIN');
  };

  return (
    <View style={[Containers.fullView,
      Containers.fullView,
      Containers.justifyCenter,
      Containers.alignCenter,
      BgView.bgBlue]}
    >
      <View style={Containers.cardView}>
        <View>
          <Text style={[Fonts.fontGray]}>
            Nombre Completo
          </Text>
          <TextInput
            style={[Containers.input]}
            placeholder="Usuario"
            placeholderTextColor="#c1c1c1"
            onChangeText={setUserName}
          />
        </View>
        <View>
          <Text style={[Fonts.fontGray]}>
            Identificación
          </Text>
          <TextInput
            style={[Containers.input]}
            placeholder="Usuario"
            placeholderTextColor="#c1c1c1"
            onChangeText={setId}
          />
        </View>
        <View>
          <Text style={[Fonts.fontGray]}>
            Usuario
          </Text>
          <TextInput
            style={[Containers.input]}
            placeholder="Usuario"
            placeholderTextColor="#c1c1c1"
            onChangeText={setUser}
          />
        </View>
        <View>
          <Text style={[Fonts.fontGray]}>
            Contraseña
          </Text>
          <TextInput
            style={[Containers.input]}
            placeholder="Contraseña"
            placeholderTextColor="#c1c1c1"
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>
        <View>
          <Text style={[Fonts.fontGray]}>
            Confirmar la Contraseña
          </Text>
          <TextInput
            style={[Containers.input]}
            placeholder="Contraseña"
            placeholderTextColor="#c1c1c1"
            secureTextEntry
            onChangeText={setConfirmPassword}
          />
        </View>
        <View style={[Containers.alignCenter, Spacing.m1]}>
          <TouchableOpacity style={Containers.primaryBtn} onPressOut={RegisterUser}>
            <Text style={Fonts.fontPrimaryBtn}>
              Crear Cuenta
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[Containers.alignCenter, Spacing.m1]}>
          <TouchableOpacity onPressOut={GoBack}>
            <Text style={Fonts.fontLink}>
              Regresar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
