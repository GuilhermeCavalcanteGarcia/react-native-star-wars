import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PeopleLista from './screens/PeopleLista';
import tw from 'twrnc';
import PersonagensDetalhes from './screens/PersonagensDetalhes';
import FilmesDetalhes from './screens/FilmesDetalhes';

const Stack = createNativeStackNavigator();

const Rotas = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: tw`bg-slate-800 p-2`,
      }}
    >
      <Stack.Screen name="PeopleLista" component={PeopleLista} />
      <Stack.Screen
        name="PersonagensDetalhes"
        component={PersonagensDetalhes}
      />
      <Stack.Screen name="FilmeDetalhes" component={FilmesDetalhes} />
    </Stack.Navigator>
  );
};

export default Rotas;
