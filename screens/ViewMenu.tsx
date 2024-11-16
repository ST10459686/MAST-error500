// src/screens/ViewScreen.tsx
import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ViewScreenNavigationProp } from '../types/Navigation';
import { MenuItem } from '../types/menu';
import { useMenu } from '../context/MenuConext';
import { styles } from '../util/styles';

interface ViewScreenProps {
  navigation: ViewScreenNavigationProp;
}

// Update ViewScreen.tsx to handle loading and error states
const ViewScreen: React.FC<ViewScreenProps> = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>('All');
  const { menuItems, isLoading, error } = useMenu();

  if (isLoading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color="#FFD700" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  const filteredMenuItems = useMemo(() => {
    return selectedCourse === 'All'
      ? menuItems
      : menuItems.filter(item => item.course === selectedCourse);
  }, [menuItems, selectedCourse]);

  const renderMenuItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.menuItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemText}>{item.description}</Text>
      <Text style={styles.itemText}>Price: R{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Menu</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCourse}
          onValueChange={(itemValue) => setSelectedCourse(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="All Courses" value="All" />
          <Picker.Item label="Appetizers" value="Appetizer" />
          <Picker.Item label="Main Courses" value="Main Course" />
          <Picker.Item label="Desserts" value="Dessert" />
        </Picker> 
      </View>

      <FlatList
        data={filteredMenuItems}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id}
        style={styles.menuList}
      />
    </View>
  );
};

export default ViewScreen;