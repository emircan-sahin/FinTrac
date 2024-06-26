import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
  }

  const [fontsLoaded, error] = useFonts({
    'Rubik-black': require('./assets/fonts/Rubik/Rubik-Black.ttf'),
    'Rubik-extrabold': require('./assets/fonts/Rubik/Rubik-ExtraBold.ttf'),
    'Rubik-bold': require('./assets/fonts/Rubik/Rubik-Bold.ttf'),
    'Rubik-semibold': require('./assets/fonts/Rubik/Rubik-SemiBold.ttf'),
    'Rubik-medium': require('./assets/fonts/Rubik/Rubik-Medium.ttf'),
    'Rubik-regular': require('./assets/fonts/Rubik/Rubik-Regular.ttf'),
    'Rubik-light': require('./assets/fonts/Rubik/Rubik-Light.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [fontsLoaded, error]);

  if (!fontsLoaded && error) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;