
// src/screens/LoginScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LoginScreenNavigationProp } from '../types/Navigation';
import { styles } from '../util/styles';

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const users = ['Chef', 'Bob', 'Jeff', 'Curt'];

  const handleLogin = (userName: string) => {
    navigation.navigate('Home', { userName });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/Your Brand.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.brandName}>Wine & Dine</Text>
          <Text style={styles.subText}>RESTAURANT</Text>
        </View>
        <View style={styles.buttonContainer}>
          {users.map((user) => (
            <TouchableOpacity
              key={user}
              style={styles.loginButton}
              onPress={() => handleLogin(user)}
            >
              <Text style={styles.loginButtonText}>{user}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;