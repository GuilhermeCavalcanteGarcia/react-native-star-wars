import { StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Cabecalho from '../components/Cabecalho';
import axios from 'axios';
import Personagem from '../components/Personagem';

const PeopleLista = () => {
  const [people, setPeople] = useState([]);

  // Estado que vai armazenar o próximo link com os dados de mais 10 personagens
  // Cada link retorna 10 novos personagens e retorna também um link para uma página seguinte com mais 10 persongens
  const [next, setNext] = useState('/people');
  const [loading, setLoading] = useState(false);

  async function lerPeople() {
    if (next != null) {
      setLoading(true);

      //O endereço base já está configurado, dessa forma basta colocar o "/people"
      const resposta = await axios.get(next);

      //   Armazenando o dado dentro do estado
      // ...people, copia cada dado do array pepleo e adiciona a resposta vindo de "resposta.data.results(que também é retornado um array vindo da API)"
      setPeople([...people, ...resposta.data.results]);

      // Armazenando o link dentro do estado next
      setNext(resposta.data.next);

      setLoading(false);
    }
  }

  //Carregando os dados da APi para armazenar no estado
  useEffect(() => {
    // Executando a função criada
    lerPeople();
  }, []);

  return (
    <SafeAreaView style={tw`p-3 flex-1`}>
      <Cabecalho />

      <FlatList
        data={people}
        renderItem={({ item }) => <Personagem personagem={item} />}
        keyExtractor={(p) => p.name}
        onEndReached={lerPeople}
        onEndReachedThreshold={0.1}
      />
      {(!people.length || loading) && (
        <ActivityIndicator size={25} color={tw`text-slate-400`.color} />
      )}
    </SafeAreaView>
  );
};

export default PeopleLista;

const styles = StyleSheet.create({});
