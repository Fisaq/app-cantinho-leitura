import { SafeAreaView,View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PathScreen({ navigation }){
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.logo}> 
        LOGO 
      </Text>

      <Text style={styles.pergunta}>
        Que tipo de usuário você é?
      </Text>
      
      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClienteLogin')}>
            <Text style={styles.buttonText}>Cliente</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GerenteLogin')}>
            <Text style={styles.buttonText}>Gerente</Text>
          </TouchableOpacity>
      </View>

      //rodape
      <View style={styles.footer}>
        <Text style={styles.footerText}> 
          Desenvolvido por{' '} 
          <Text style={styles.footerTextHighlight}>Isaque Reis</Text>
        </Text>
      </View>
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBlockStart: 100,
      paddingBlockEnd: 20,
      backgroundColor: '#2A00E7'
    },
    logo: {
      color: "#ffffff",
      fontSize: 24,
    },
    pergunta:{
      fontSize: 20,
      color: '#ffffff',
      fontWeight: 'bold',
      paddingBlockStart: 190,
    },
    buttonContainer:{
      paddingBlockStart: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button:{
      paddingVertical: 43,
      paddingHorizontal: 44,
      backgroundColor: '#0083E7',
      borderRadius: 10,
      marginHorizontal: 10,
    },
    buttonText:{
      color: '#ffffff',
      fontWeight: 'bold',
    },
    footer:{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBlockStart: 300,
    },
    footerText:{
      color: '#ffffff'
    },
    footerTextHighlight:{
      color: '#FB6400',
      fontWeight: 'bold',
    }
});
