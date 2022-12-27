import { Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import Cabecalho from '../components/Cabecalho';

const FilmesDetalhes = ({ route }) => {
  const { filme } = route.params;
  return (
    <SafeAreaView>
      <Cabecalho />
      <Text style={tw`text-2xl text-slate-200 text-center mb-4`}>
        {filme.title}
      </Text>
      <Text style={tw`text-lg text-slate-300`}>
        Episode : {filme.episode_id}
      </Text>
      <Text style={tw`text-lg text-slate-300`}>
        Director : {filme.director}
      </Text>
      <Text style={tw`text-lg text-slate-300`}>
        Release Date : {filme.release_date}
      </Text>
    </SafeAreaView>
  );
};

export default FilmesDetalhes;
