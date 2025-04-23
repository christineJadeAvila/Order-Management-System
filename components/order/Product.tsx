import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Product = () => {
  return (
    <View>
        <View style={styles.productCardContainer}>
            <View style={styles.imageContainer}/>
            <View>
                <Text style={styles.productName}>Product Name</Text>
                <Text style={styles.productPrice}>$0.00</Text>
            </View>
            <View 
                className="addToOrderBtn"
            >
                    add
            </View>
        </View>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
    productCardContainer: {
        borderWidth: 0.5,
        borderColor: 'gainsboro',
        width: 132,
        height: 180,
        margin: 5,
        padding: 8, // 0.5rem roughly equals 8px
        borderRadius: 10,
        backgroundColor: 'white',
      },
      imageContainer: {
        width: 110,
        height: 80,
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
      },
      productName: {
        fontSize: 12,
      },
      productPrice: {
        fontSize: 20,
        alignSelf: 'flex-end', // React Native alternative to float: right
      },
})