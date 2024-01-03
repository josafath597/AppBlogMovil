import { PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import theme from './src/theme/Theme';
import HomeScreen from './src/Views/Home/Home';
import Details from './src/Views/Details/Details';
import AddNewEntry from './src/Views/AddNewEntry/AddNewEntry';
import { EntriesProvider } from './src/Context/EntriesProvider';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <EntriesProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: true, title: 'Blog', headerTitleAlign: 'center' }}
            />
            <Stack.Screen
              name="Details"
              component={Details}
              options={{ headerShown: true, title: 'Detalles de la Entrada', headerTitleAlign: 'center' }}
            />
            <Stack.Screen
              name="AddNewEntry"
              component={AddNewEntry}
              options={{ headerShown: true, title: 'Agregar Nueva Entrada', headerTitleAlign: 'center' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </EntriesProvider>
  );
}
