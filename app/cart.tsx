import {  FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from '@/components/ui/text';
import { useCart } from '@/Store/cartStore';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Button, ButtonText } from '@/components/ui/button';
import { Redirect } from 'expo-router';


const cart = () => {
    const items=useCart((state:any)=>state.items);
    const onCheckout=useCart((state:any)=>state.resetCart
  );
  if(items.length===0){
    return<Redirect href="/" />
  }
  return (
  <FlatList
  data={items}
  contentContainerClassName='gap-2 '
  renderItem={({item})=>(
        <HStack  className="bg-white p-3"  >
          <VStack space='sm'>
          <Text bold>{item.product.name}</Text>
          <Text>{item.product.price}</Text>
          </VStack>

            <Text className="ml-auto" >{item.quantity}</Text>
        </HStack>
    )}
    ListFooterComponent={()=>(
<Button onPress={onCheckout}  >
  <ButtonText>
   CheckOut
  </ButtonText>
</Button>
    )
  }
  />

  )
}

export default cart

const styles = StyleSheet.create({})