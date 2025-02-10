import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();
  
const RootLayout = () => {
  const [loaded, error] = useFonts({
    'Outfit-Black': require('./../assets/fonts/Outfit-Black.ttf'),
    'Outfit-Bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'Outfit-Regular': require('./../assets/fonts/Outfit-Regular.ttf'),
    'Outfit-SemiBold': require('./../assets/fonts/Outfit-SemiBold.ttf'),
    'Rosemary': require('./../assets/fonts/Rosemary.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return( 
  <Stack screenOptions={{headerShown: false}}>
    <Stack.Screen name="index"/>
  </Stack>
  );
}

export default RootLayout;