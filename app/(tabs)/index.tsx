import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View>
      <View>
        {/* Navbar */}
        {/* Display Categories */}
        <View style={styles.categoryCardContainer}>All Menu</View>
        <View style={styles.categoryCardContainer}>Dessert</View>
        <View style={styles.categoryCardContainer}>Cocktails</View>

        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search for something...🍕"
        />
      </View>
      <View></View>
      <View></View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  categoryCardContainer: {
    borderWidth: 0.5,
    borderColor: 'white', 
    width: 88,
    height: 30,
    margin: 5,
    padding: 8, // 0.5rem ≈ 8px
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  searchBar: {
    borderWidth: 0.5,
    borderColor: 'black', 
    borderRadius: 10,
    height: 40,
    padding: 5,
    width: 500,
  }
})