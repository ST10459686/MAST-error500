// src/context/MenuContext.tsx
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MenuItem, MenuContextType } from '../types/menu';

// Define the storage key for AsyncStorage
const STORAGE_KEY = '@menu_items';

// Create the context with a default value to ensure type safety
const MenuContext = createContext<MenuContextType>({
  menuItems: [],
  addMenuItem: async () => {},
  deleteMenuItem: async () => {},
  loadMenuItems: async () => Promise.resolve(),
  isLoading: false,
  error: null,
});

// MenuProvider component that wraps the app or part of the app where the menu context is needed
export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State for storing the list of menu items
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  // Load menu items from AsyncStorage
  const loadMenuItems = useCallback(async () => {
    try {
      const storedItems = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedItems) {
        setMenuItems(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error('Error loading menu items:', error);
    }
  }, []);

  // Function to add a new menu item
  const addMenuItem = useCallback(
    async (newItem: MenuItem) => {
      try {
        const updatedItems = [...menuItems, newItem];
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems));
        setMenuItems(updatedItems);
      } catch (error) {
        console.error('Error saving menu item:', error);
      }
    },
    [menuItems]
  );

  // Function to delete a menu item by its ID
  const deleteMenuItem = useCallback(
    async (itemId: string) => {
      try {
        const updatedItems = menuItems.filter(item => item.id !== itemId);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems));
        setMenuItems(updatedItems);
      } catch (error) {
        console.error('Error deleting menu item:', error);
      }
    },
    [menuItems]
  );

  // Load menu items when the component mounts
  useEffect(() => {
    loadMenuItems();
  }, [loadMenuItems]);

  // Context value that will be provided to consuming components
  const value: MenuContextType = {
    menuItems,
    addMenuItem,
    deleteMenuItem,
    loadMenuItems,
    isLoading: false,
    error: null,
  };

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
};

// Custom hook to use the MenuContext in functional components
export const useMenu = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};