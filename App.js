import { Image, StyleSheet, Text, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.coinContainer}>
        <Image
          source={{
            uri: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579'
          }}
          style={{
            height: 30,
            width: 30,
            marginRight: 10,
            alignSelf: 'center'
          }}
        />
        <View>
          <Text style={styles.title}>Bitcoin</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.rankContainer}>
              <Text style={styles.rank}>1</Text>
            </View>
            <Text style={styles.text}>BTC</Text>
            <AntDesign
              name='caretdown'
              size={14}
              color='white'
              style={{ alignSelf: 'center', marginRight: 5 }}
            />
            <Text style={styles.text}>0.63%</Text>
          </View>
        </View>
        <View style={{ marginLeft: 'auto' }}>
          <Text style={styles.title}>56,699.01</Text>
          <Text style={styles.text}>MCap 1.076 T</Text>
        </View>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3
  },
  text: {
    color: 'white',
    marginRight: 5
  },
  coinContainer: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
    padding: 15,
    justifyContent: 'space-between'
  },
  rankContainer: {
    backgroundColor: '#585858',
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5
  },
  rank: {
    fontWeight: 'bold',
    color: 'white'
  }
});
