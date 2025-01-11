import { Stack, Tabs } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";


export default function layout(){
    return(
        <GluestackUIProvider>
              <Stack/>
        </GluestackUIProvider>
       
    )
}