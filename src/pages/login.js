import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text, View, TextInput, TouchableOpacity,
} from 'react-native';

import { LoginUser } from '../api/userApi';
import { AlertOk } from '../components/alerts';
import {
  Containers, BgView, Fonts, Spacing,
} from '../styles';

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigation();

  const onLoginUser = () => {
    LoginUser(user, password).then((userData) => {
      if (!userData) {
        AlertOk('Login', 'Usuario incorrecto', 'reintentar');
        return;
      }

      nav.navigate('USER', { userData });
    });
  };

  const onRegisterUser = () => {
    nav.navigate('REGISTER');
  };

  return (
    <View style={[Containers.fullView,
      Containers.justifyCenter,
      Containers.alignCenter,
      BgView.bgBlue]}
    >
      <View style={[Containers.cardView, Containers.cardMini]}>
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
        <View style={[Containers.alignCenter, Spacing.m1]}>
          <TouchableOpacity
            style={Containers.primaryBtn}
            onPressOut={onLoginUser}
            disabled={!user && !password}
          >
            <Text style={Fonts.fontPrimaryBtn}>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[Containers.alignCenter, Spacing.m1]}>
          <TouchableOpacity onPressOut={onRegisterUser}>
            <Text style={Fonts.fontLink}>
              Registrate con nosotros
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Login;
