import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const Personagem = ({ personagem }) => {
  const navi = useNavigation();

  return (
    <TouchableOpacity
      style={tw`p-5 bg-slate-600 m-1 rounded-lg`}
      onPress={() => navi.navigate('PersonagensDetalhes', { personagem })}
    >
      <Text style={tw`text-3xl text-slate-200`}>{personagem.name}</Text>
    </TouchableOpacity>
  );
};

export default Personagem;
