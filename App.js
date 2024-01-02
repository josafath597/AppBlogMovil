import { PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import theme from './src/theme/Theme';
import HomeScreen from './src/Views/Home/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }} // Desactiva el Header
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
