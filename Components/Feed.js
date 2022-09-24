import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Feed() {
  const [stories, setStories]= useState([]);

  useEffect(function(){
      async function getData(){
          const response= await fetch('https://mobile.ect.ufrn.br:3000/stories');
          const stories= await response.json();
          setStories(stories);
      }
      getData();
  }, [])

const feed= [
  {
    id: 1,
    nome: 'Piu Piu',
    imgPerfil: require('../assets/imagens/pernalonga.png'),
    img: require('../assets/imagens/looneytunes.png'),
    aspectRatio: 1.088,
  },
  {
    id: 2,
    nome: 'Pernalonga',
    imgPerfil: require('../assets/imagens/pernalonga.png'),
    img: require('../assets/imagens/looneytunes2.png'),
    aspectRatio: 1.777,
  },
];

function renderItem({ item }){
  return <View style={styles.post}>
  <View style={styles.postheader}>
      <View style={styles.postheaderesquerda}>
          <Image style={styles.postheaderimg} source={item.imgPerfil}></Image>
          <Text>{item.nome}</Text>
      </View>
      <FontAwesome5 name="ellipsis-h" size={24} color="black"></FontAwesome5>
  </View>
  <Image style={styles.postimg} aspectRatio={item.aspectRatio} source={item.img}/>
  <View style={styles.footer}>
      <FontAwesome5 style={styles.footericon} name="heart" size={24} color="black"/>
      <FontAwesome5 style={styles.footericon} name="comment" size={24} color="black"/>          
  </View>
</View>
}

export default function Feed() {
    return (
        <View style={styles.feed}>
          <FlatList
          data= {feed}
          renderItem= {renderItem}
          keyExtractor= {item => item.id}
          showsVerticalScrollIndicator= {false}
          />          
      </View>        
    );
}

const styles = StyleSheet.create({
    feed: {
        flex: 1,
        backgroundColor: '#fff',
      },
      post: {
        backgroundColor: '#fff',
      },
      postheader: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 5,
      },
      postheaderesquerda: {
        flexDirection: 'row',
        alignItems: 'center',
      },  
      postheaderimg: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 5,
      },
      postimg: {
        width: '100%',
        height: undefined,
      },
      footer: {
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
      },
      footericon: {
        margin: 5,
      },
});