
// src/styles/index.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // All styles from your original StyleSheet
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  card: {
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
    alignItems: 'center',
 
    },
    // Container for the logo and branding
    logoContainer: {
      alignItems: 'center', // Center align children
      marginBottom: 20, // Space below the logo
    },
    // Brand name text style
    brandName: {
      fontSize: 24, // Large font size
      fontWeight: 'bold', // Bold text
      color: '#000', // Black color
      marginTop: 10, // Space above the brand name
    },
    // Subtext style below the brand name
    subText: {
      fontSize: 16, // Medium font size
      color: '#888', // Gray color
      marginTop: 5, // Space above the subtext
    },
    // Style for the logo image
    logo: {
      width: 200, // Increased width from 100 to 200
      height: 200, // Increased height from 100 to 200
    },
    // Container for login buttons
    buttonContainer: {
      marginTop: 10, // Space above the button container
      width: '100%', // Full width
    },
    // Style for each login button
    loginButton: {
      backgroundColor: '#FFD700', // Gold background color
      padding: 15, // Padding inside the button
      borderRadius: 5, // Rounded corners
      alignItems: 'center', // Center align text
      marginVertical: 5, // Vertical spacing between buttons
    },
    // Text style for login buttons
    loginButtonText: {
      fontSize: 16, // Medium font size
      fontWeight: 'bold', // Bold text
      color: '#000', // Black color
    },
    // Header style used in Home and Enter screens
    header: {
      padding: 20, // Padding inside the header
      backgroundColor: '#FFD700', // Gold background color
      borderRadius: 5, // Rounded corners
      marginBottom: 10, // Space below the header
    },
    // Header text style
    headerText: {
      fontSize: 20, // Large font size
      fontWeight: 'bold', // Bold text
      textAlign: 'center', // Center align text
    },
    // Container for the Picker component
    pickerContainer: {
      marginVertical: 20, // Vertical spacing around the picker
    },
    // Style for Picker component
    picker: {
      height: 50, // Fixed height
      width: '100%', // Full width
      backgroundColor: '#fff', // White background
    },
    // Container for statistics in Home screen
    statsContainer: {
      flexDirection: 'row', // Arrange children in a row
      justifyContent: 'space-between', // Space between the stat blocks
      marginBottom: 20, // Space below the statistics
    },
    // Style for each statistic block
    statBlock: {
      backgroundColor: '#f0f0f0', // Light gray background
      padding: 10, // Padding inside the stat block
      borderRadius: 5, // Rounded corners
      flex: 1, // Take equal space
      marginHorizontal: 5, // Horizontal spacing between stat blocks
      alignItems: 'center', // Center align text
    },
    // Title text for each statistic
    statTitle: {
      fontWeight: 'bold', // Bold text
    },
    // Value text for each statistic
    statValue: {
      fontSize: 18, // Larger font size
      marginTop: 5, // Space above the value
    },
    // Style for the FlatList containing menu items
    menuList: {
      marginTop: 20, // Space above the menu list
      flexGrow: 0, // Prevent the list from expanding infinitely
    },
    // Style for each menu item in the list
    menuItem: {
      padding: 10, // Padding inside each menu item
      borderBottomWidth: 1, // Bottom border width
      borderBottomColor: '#ddd', // Light gray bottom border color
    },
    // Text style for menu item names
    itemName: {
      fontSize: 18, // Larger font size
      fontWeight: 'bold', // Bold text
      color: '#333', // Dark gray color
    },
    // Text style for menu item details
    itemText: {
      color: '#555', // Medium gray color
      marginTop: 2, // Space above the text
    },
    // Style for the Logout button
    logoutButton: {
      backgroundColor: '#f44336', // Red background color
      padding: 15, // Padding inside the button
      borderRadius: 5, // Rounded corners
      alignItems: 'center', // Center align text
      marginVertical: 5, // Vertical spacing around the button
    },
    // Style for the View Menu button
    viewButton: {
      backgroundColor: 'gold', // Blue background color
      padding: 15, // Padding inside the button
      borderRadius: 5, // Rounded corners
      alignItems: 'center', // Center align text
      marginVertical: 5, // Vertical spacing around the button
    },
    // Style for the Chef-specific button to enter new menu items
    chefButton: {
      backgroundColor: '#4CAF50', // Green background color
      padding: 15, // Padding inside the button
      borderRadius: 5, // Rounded corners
      alignItems: 'center', // Center align text
      marginVertical: 5, // Vertical spacing around the button
      width: '100%', // Full width
    },
    // Common text style for all buttons
    buttonText: {
      fontSize: 16, // Medium font size
      fontWeight: 'bold', // Bold text
      color: '#fff', // White text color
    },
    // Style for the Submit button in Enter screen
    submitButton: {
      backgroundColor: '#2196F3', // Blue background color
      padding: 15, // Padding inside the button
      borderRadius: 5, // Rounded corners
      alignItems: 'center', // Center align text
      marginVertical: 5, // Vertical spacing around the button
    },
    // Container for the form in Enter screen
    form: {
      marginTop: 20, // Space above the form
    },
    // Style for TextInput fields
    input: {
      borderWidth: 1, // Border width
      borderColor: '#ccc', // Light gray border color
      borderRadius: 5, // Rounded corners
      padding: 10, // Padding inside the input
      marginBottom: 10, // Space below the input
      backgroundColor: '#fff', // White background
    },
    
    centerContent: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#333',
    },
    courseFilter: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
    },
    courseButton: {
      padding: 10,
      marginHorizontal: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 20,
      backgroundColor: '#fff',
    },
    selectedCourseButton: {
      backgroundColor: '#FFD700',
    },
    courseButtonText: {
      fontSize: 16,
      color: '#333',
    },
    
    menuItemName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    menuItemDescription: {
      fontSize: 14,
      color: '#666',
      marginVertical: 5,
    },
    menuItemPrice: {
      fontSize: 16,
      color: '#333',
      fontWeight: 'bold',
    },
    menuItemCourse: {
      fontSize: 12,
      color: '#999',
    },
    errorText: {
      fontSize: 16,
      color: 'red',
      marginBottom: 20,
    },
    retryButton: {
      padding: 10,
      backgroundColor: '#FFD700',
      borderRadius: 5,
    },
    
    addButton: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#FFD700',
      borderRadius: 50,
      elevation: 3, // Adds a shadow for Android
      shadowColor: '#000', // Adds a shadow for iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
    },
    
    menuItemContent: {
      flex: 1,
    },
    deleteButton: {
      backgroundColor: '#ff4444',
      padding: 8,
      borderRadius: 4,
      marginLeft: 10,
    },
    deleteButtonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });
 
  
  export default styles;
  
