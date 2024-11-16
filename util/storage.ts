
// src/utils/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MenuItem } from '../types/menu';

const MENU_ITEMS_KEY = '@restaurant_menu_items';

export const saveMenuItems = async (items: MenuItem[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(items);
    await AsyncStorage.setItem(MENU_ITEMS_KEY, jsonValue);
  } catch (error) {
    console.error('Error saving menu items:', error);
    throw error;
  }
};

export const loadMenuItems = async (): Promise<MenuItem[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(MENU_ITEMS_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error loading menu items:', error);
    throw error;
  }
};