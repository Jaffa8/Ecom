import { Text } from "@/components/ui/text";
import { Stack, useLocalSearchParams } from "expo-router";
import products from '@/assets/products.json';
import { Card } from "@/components/ui/card";  
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { useCart } from "@/Store/cartStore";


export default function ProductDescription(){
    const {id}=useLocalSearchParams ();
  
    const addProduct=useCart((state:any)=>state.addProduct);
    const cartItems=useCart((state:any)=>state.items);
    console.log(cartItems);

    const product=products.find((product)=>product.id===Number(id));
    if(!product){
        return <Text>
            Product not found
        </Text>
    }

    return(
     
        <Card className="p-5 rounded-lg max-w-[560px] flex-1" >
      <Stack.Screen options={{title:product.name}}/>
        <Image
          source={{
            uri: product.image,
          }}
          className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
          alt={`${product.name} image`}
          resizeMode="contain"
        />
        <Text className="text-sm font-normal mb-2 text-typography-700">
          {product.name}
        </Text>
        <VStack className="mb-6">
          <Heading size="md" className="mb-4">
           $ {product.price}
          </Heading>
          <Text size="sm">
           {product.description}
          </Text>
        </VStack>
        <Box className="flex-col sm:flex-row">
          <Button
           onPress={()=>addProduct(product)}
          className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
            <ButtonText size="sm">Add to cart</ButtonText>
          </Button>
          <Button
            variant="outline"
            className="px-4 py-2 border-outline-300 sm:flex-1"
          >
            <ButtonText size="sm" className="text-typography-600">
              Wishlist
            </ButtonText>
          </Button>
        </Box>
      </Card>
    )
}