import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}> 
        <Image style={styles.ufrngram} source={require('./assets/imagens/ufrngram.png')}></Image>       
        <FontAwesome5 name="paper-plane" size={24} color="black"></FontAwesome5>
      </View>
      <View style={styles.stories}>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/imagens/pernalonga.png')}></Image>
          <Text>Pernalonga</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/imagens/pernalonga.png')}></Image>
          <Text>Taz</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/imagens/pernalonga.png')}></Image>
          <Text>Frajola</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/imagens/pernalonga.png')}></Image>
          <Text>Patolino</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/imagens/pernalonga.png')}></Image>
          <Text>Piu Piu</Text>
        </View>
      </View>
      <View style={styles.feed}>
        <View style={styles.post}>
          <View style={styles.postheader}>
            <Image style={styles.postheaderimg} source={require('./assets/imagens/pernalonga.png')}></Image>
            <Text>Piu Piu</Text>
            <FontAwesome5 name="ellipsis-h" size={24} color="black"></FontAwesome5>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "space-between",
  },
  ufrngram: {
    height: 25,
    width: 110,
  },
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
  feed: {
    flex: 1,
    backgroundColor: 'red',
  },
  post: {
    backgroundColor: 'blue',
  },
  postheader: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postheaderimg: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
