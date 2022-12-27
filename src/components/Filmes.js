import { Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const Filmes = ({ filme }) => {
  const navi = useNavigation();

  return (
    <TouchableOpacity
      style={tw`p-2 bg-slate-600 m-1 rounded-lg`}
      onPress={() => navi.navigate('FilmeDetalhes', { filme })}
    >
      <Text style={tw`text-slate-300`}>{filme.title}</Text>
    </TouchableOpacity>
  );
};

export default Filmes;
