import { View, Text } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';
import BotaoVoltar from './BotaoVoltar';

const Cabecalho = () => {
  return (
    <View
      style={tw`flex-row justify-center mb-4 pb-2 border-b-2 border-b-slate-600 relative`}
    >
      <BotaoVoltar />
      <FontAwesome
        name="space-shuttle"
        size={32}
        color={tw`text-slate-400`.color}
      />
      <Text style={tw`text-2xl text-slate-400 ml-2`}>Star Wars Info App!</Text>
    </View>
  );
};

export default Cabecalho;
