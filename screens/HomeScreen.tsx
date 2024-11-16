// src/screens/HomeScreen.tsx
import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Alert } from 'react-native';
import { useMenu } from '../context/MenuConext';
import { styles } from '../util/styles'
import { MenuItem } from '../types/menu';
import { HomeScreenNavigationProp, HomeScreenRouteProp } from '../types/Navigation';

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  const { userName } = route.params;
  const isChef = userName === 'Chef';
  const { menuItems, deleteMenuItem, isLoading, error } = useMenu();
  const [selectedCourse, setSelectedCourse] = useState<string>('All');

  const handleDeleteMenuItem = (itemId: string, itemName: string) => {
    Alert.alert(
      'Delete Menu Item',
      `Are you sure you want to delete "${itemName}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => deleteMenuItem(itemId),
          style: 'destructive',
        },
      ]
    );
  };

  const renderMenuItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.menuItem}>
      <View style={styles.menuItemContent}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemText}>{item.course} - R{item.price}</Text>
      </View>
      {isChef && (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteMenuItem(item.id, item.name)}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const filteredItems = useMemo(() => {
    return selectedCourse === 'All'
      ? menuItems
      : menuItems.filter(item => item.course === selectedCourse);
  }, [menuItems, selectedCourse]);

  const courses = ['All', 'Appetizer', 'Main Course', 'Dessert'];

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
        <TouchableOpacity 
          style={styles.retryButton}
          onPress={() => navigation.replace('Home', { userName })}
        >
          <Text style={styles.buttonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {userName}!</Text>
      
      <View style={styles.courseFilter}>
        {courses.map(course => (
          <TouchableOpacity
            key={course}
            style={[
              styles.courseButton,
              selectedCourse === course && styles.selectedCourseButton
            ]}
            onPress={() => setSelectedCourse(course)}
          >
            <Text style={styles.courseButtonText}>{course}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id}
        renderItem={renderMenuItem}
      />

      {isChef && (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('Enter')}
        >
          <Text style={styles.buttonText}>Add Menu Item</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};