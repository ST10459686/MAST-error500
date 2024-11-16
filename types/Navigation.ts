
// src/types/navigation.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Login: undefined;
  Home: { userName: string };
  Enter: undefined;
  View: undefined;
};

export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type EnterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Enter'>;
export type ViewScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'View'>;
export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
