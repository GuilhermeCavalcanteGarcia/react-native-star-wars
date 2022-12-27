import { Text, ActivityIndicator, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Cabecalho from '../components/Cabecalho';
import tw from 'twrnc';
import axios from 'axios';
import Filmes from '../components/Filmes';

// Toda Screen recebe automaticamente um informção chamada route
const PersonagensDetalhes = ({ route }) => {
  const { personagem } = route.params;

  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function lerFilms() {
      const tempFilms = [];

      // Percorrer a url para pegar os dados do filme
      // IMPORTANTE quando usar o async/await do JS não deve-se usar o foreach
      // Nesse caso é recomendado usar o "for of"
      for (const url of personagem.films) {
        // Vai percorrer cada url retonada em "films" na API do StarWars
        const response = await axios.get(url);

        // Primeiramente armazena os filmes em um array separado
        tempFilms.push(response.data);
      }
      // Após armazenar todos os dados dos filmes no array separado, esse array é jogado dentro do estado
      setFilms(tempFilms);
    }
    lerFilms();
  }, []);
  return (
    <SafeAreaView>
      <Cabecalho />
      <Text style={tw`text-2xl text-slate-200 text-center mb-4`}>
        {personagem.name}
      </Text>
      <Text style={tw`text-lg text-slate-300`}>
        Hair Color : {personagem.hair_color}
      </Text>
      <Text style={tw`text-lg text-slate-300`}>
        Eye Color : {personagem.eye_color}
      </Text>
      <Text style={tw`text-lg text-slate-300`}>
        Gender : {personagem.gender}
      </Text>

      {/* Lista de Filmes em que o personagem aparece */}
      <Text style={tw`text-2xl text-slate-400 text-center my-4`}>Filmes</Text>
      {!films.length && (
        <ActivityIndicator size={25} color={tw`text-slate-400`.color} />
      )}
      <FlatList
        data={films}
        renderItem={({ item }) => <Filmes filme={item} />}
        keyExtractor={(f) => f.episode_Id}
      />
    </SafeAreaView>
  );
};

export default PersonagensDetalhes;
