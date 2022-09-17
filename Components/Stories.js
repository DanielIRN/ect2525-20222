import React from "react";
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';

export default function Stories() {
    const stories= [
        {
            id: 1,
            nome: 'Pernalonga',
            src: require('../assets/imagens/pernalonga.png'),
        },
        {
            id: 2,
            nome: 'Taz',
            src: require('../assets/imagens/pernalonga.png'),
        },
        {
            id: 3,
            nome: 'Frajola',
            src: require('../assets/imagens/pernalonga.png'),
        },
        {
            id: 4,
            nome: 'Patolino',
            src: require('../assets/imagens/pernalonga.png'),
        },
        {
            id: 5,
            nome: 'Piu Piu',
            src: require('../assets/imagens/pernalonga.png'),
        },
        {
            id: 6,
            nome: 'Felicia',
            src: require('../assets/imagens/pernalonga.png'),
        },
    ];

    function renderItem({item}){
        return <View style={styles.story}>
        <Image style={styles.imgstory} source={item.src}></Image>
        <Text>{item.nome}</Text>
    </View>   
    };

    return (
    <View style={styles.stories}>
        <FlatList
            data= {stories}
            renderItem= {renderItem}
            keyExtractor= {item => item.id}
            horizontal
            showsHorizontalScrollIndicator= {false}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    stories: {
        flexDirection: 'row',
        height: 90,
        backgroundColor: '#fff',
      },
      story: {
        height: 90,
        width: 90,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
      imgstory: {
        width: 70,
        height: 70,
        borderRadius: 35,
      },
});