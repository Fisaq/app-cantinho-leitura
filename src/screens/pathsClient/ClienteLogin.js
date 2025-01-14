import {useState} from 'react';
import {SafeAreaView, TouchableOpacity, Alert, TextInput, View, Text, StyleSheet} from 'react-native';

export default function ClienteLogin({navigation}){

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const camposVazios = () =>{
    if (!email || !senha){
      Alert.alert('Mensagem', 'Por favor preencha os campos de login e senha corretamente.');
    }
    else{
      return navigation.navigate('ClientePrincipal');
    }
  }
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.logo}> 
        LOGO 
      </Text>

      <TextInput
        style={[styles.input, {marginBottom: 25}]}
        placeholder='e-mail'
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder='senha'
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.linkCadastro} onPress={() => navigation.navigate('ClienteCadastro')}>
          <Text style={styles.textLinkCadastro}> Cadastre-se </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonEntrar} onPress={camposVazios}>
          <Text style={styles.buttonEntrarText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}> 
          Desenvolvido por{' '} 
          <Text style={styles.footerTextHighlight}>Isaque Reis</Text>
        </Text>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2A00E7'
    },
    logo: {
      color: "#ffffff",
      fontSize: 24,
      paddingBlockEnd: '20%',
      paddingBlockStart: 160,
    },
    input:{
      backgroundColor: '#ffffff',
      paddingHorizontal: 10,
      color: '#000000',
      width: '80%',
      borderRadius: 5,
    },
    linkCadastro:{
      paddingBlockStart: 10,
      alignSelf: 'flex-start',
      paddingLeft: 38,
    },
    textLinkCadastro:{
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 16,
      textDecorationLine: 'underline',
    },
    buttonEntrar:{
      paddingBlockStart: 100,
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonEntrarText: {
      backgroundColor: '#FB6400',
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 14,
      paddingHorizontal: '40%',
      paddingVertical: 10,
      borderRadius: 10,
    },
    footer:{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBlockStart: 200,
    },
    footerText:{
      color: '#ffffff'
    },
    footerTextHighlight:{
      color: '#FB6400',
      fontWeight: 'bold',
    },
  }
);
