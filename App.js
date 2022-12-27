import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Rotas from './src/Rotas';
import axios from 'axios';

axios.defaults.baseURL = 'https://swapi.dev/api/';

export default function App() {
  return (
    <SafeAreaProvider style={tw`bg-slate-900`}>
      <NavigationContainer>
        <Rotas />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
