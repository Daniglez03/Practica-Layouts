import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text></Text>
      </View>
      <View style={styles.containerBottom}>
        <Text></Text>
      </View>
      <View style={styles.qrCode}>
        <Text></Text>
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
  },
  containerBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    flex: 5,
    width: '100%',
  },
  qrCode: {
    flex:3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  }
});
