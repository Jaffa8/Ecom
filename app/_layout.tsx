import { Link, Stack, Tabs } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Icon } from "@/components/ui/icon";
import { ShoppingCart } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { useCart } from "@/Store/cartStore";
import { Text } from "@/components/ui/text";

export default function layout() {
    const cartItemNum=useCart((state:any)=>state.items.length);
    return (
        <GluestackUIProvider>
            <Stack screenOptions={{ headerRight: () =>(
                <Link href="/cart" asChild>
                <TouchableOpacity >
                 <Icon  as={ShoppingCart} />
                 <Text italic bold>{cartItemNum}</Text>
                 </TouchableOpacity>
                 </Link>
                ) }}
            
                 >
                <Stack.Screen 
                    name="index" 
                    options={{ 
                        title: 'Shop', 
                        headerTitleAlign: 'center' 
                    }} 
                />
                <Stack.Screen 
                    name="product/[id]" 
                    options={{ 
                        headerTitleAlign: 'center' 
                    }} 
                />
                 <Stack.Screen 
                    name="cart" 
                    options={{ 
                        title: 'Cart', 
                        headerTitleAlign: 'center' 
                    }} 
                />
            </Stack>
        </GluestackUIProvider>
    );
}