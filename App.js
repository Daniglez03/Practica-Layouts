import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Image style={styles.image} source={require('./img/Foto.jpg')}></Image>
        <Text style={styles.text}>Daniel González Lorenzo</Text>
      </View>
      <View style={styles.containerBottom}>
        <Text>Mi nombre es Daniel González Lorenzo, en la actualidad soy estudiante en los salesianos La Cuesta de Tenerife.Disfruto mucho estar estudiando mi hobby ya que es muy entretenido.
        </Text>
      </View>
      <View style={styles.qrCode}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 2,
    backgroundColor: 'grey',
  },
  containerBottom: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
    flex: 5,
    width: '100%',
  },
  qrCode: {
    flex:3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    flex: 1,
    fontSize: 25,
    textAlignVertical: 'center',
    textAlign:'center',
    color: 'white',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 100,
    marginLeft: 20,
  }
});
