import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const BotaoVoltar = () => {
  const navi = useNavigation();

  //   Verificando se é a primeira página da aplicação
  //   Caso ser a primeira página da aplicação o botão não será mostrado
  if (navi.getState().index == 0) {
    return <></>;
  }

  return (
    <TouchableOpacity style={tw`absolute left-0`} onPress={() => navi.goBack()}>
      <AntDesign name="back" size={24} color={tw`text-slate-400`.color} />
    </TouchableOpacity>
  );
};

export default BotaoVoltar;
