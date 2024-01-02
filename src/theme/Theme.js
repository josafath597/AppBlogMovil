import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4A90E2', // Azul suave
    secondary: '#AAB8C2', // Gris claro
    background: '#FAFAFA', // Gris muy claro o blanco
    text: '#333333', // Gris oscuro
    accent: '#48C774', // Verde suave
  },
};

export default theme;
