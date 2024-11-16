// src/screens/EnterScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { EnterScreenNavigationProp } from '../types/Navigation';
import { useMenu } from '../context/MenuConext';
import { styles } from '../util/styles';

interface EnterScreenProps {
  navigation: EnterScreenNavigationProp;
}

// Update EnterScreen.tsx to handle async addMenuItem
const EnterScreen: React.FC<EnterScreenProps> = ({ navigation }) => {
  const { addMenuItem } = useMenu();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('Appetizer');

  const handleAddMenuItem = async () => {
    if (name && description && price && course) {
      try {
        const newItem = {
          id: Date.now().toString(),
          name,
          description,
          price,
          course,
        };
        await addMenuItem(newItem);
        setName('');
        setDescription('');
        setPrice('');
        setCourse('Appetizer');
        alert('Menu item added successfully!');
      } catch (error) {
        alert('Failed to add menu item. Please try again.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Enter Menu Items</Text>
      </View>
      
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Dish Name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          placeholderTextColor="#888"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          placeholderTextColor="#888"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <Picker 
          selectedValue={course} 
          onValueChange={(itemValue) => setCourse(itemValue)} 
          style={styles.picker}
        >  
          <Picker.Item label="Appetizer" value="Appetizer" />
          <Picker.Item label="Main Course" value="Main Course" />
          <Picker.Item label="Dessert" value="Dessert" />
        </Picker> 
        <TouchableOpacity 
          style={styles.submitButton} 
          onPress={handleAddMenuItem}
        >
          <Text style={styles.buttonText}>Add Menu Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EnterScreen;