import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import "@/global.css";
import ProductList from '../components/ProductList'
import products from '../assets/products.json'
import { Button, ButtonText } from '@/components/ui/button'


const index = () => {
  return (
   <FlatList
   data={products}
  numColumns={2}
  contentContainerClassName='gap-2'
  columnWrapperClassName='gap-2'
    renderItem={({item}) => <ProductList product={item} />}
   />
  )
}

export default index

const styles = StyleSheet.create({})