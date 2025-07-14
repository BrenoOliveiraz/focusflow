import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import FocusButton from '../components/focusButton'
import Footer from '../components/footer'




export default function Index() {

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image
          source={require('../assets/images/Logof.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>
          Otimize sua produtividade,  {'\n'}

          <Text style={styles.bold}>
            mergulhe no que  {'\n'}importa
          </Text>

        </Text>

        <Image
          style={styles.image}
          source={require('../assets/images/Imagem-tela-inicial.png')}
          resizeMode="contain"
        />

        <FocusButton title='Quero Iniciar!' />
      </View>

      <Footer />
    </View>
  );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40
  },
  inner: {
    gap: 16
  },
  
logo: {
  width: 260,  // pixels
  height: 80,  // pixels

  alignSelf: 'center',
  marginBottom: 16,
},



  title: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 26
  },

  bold: {
    fontWeight: 'bold',

  }





})