import { MainStackNavigator } from './src/presentation/navigator/MainStackNavigator';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <MainStackNavigator />
    </NavigationContainer>
  )
}