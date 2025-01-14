import {useState} from 'react';
import {SafeAreaView, TouchableOpacity, Alert, TextInput, View, Text, StyleSheet} from 'react-native';

export default function ClienteCadastro({navigation}){

  const [nome, setNome] = useState('');
  const [emailCadastro, setEmail] = useState('');
  const [senhaCadastro, setSenha] = useState('');
  const [validaSenha, setValidacao] = useState('');

  const camposVazios = () =>{
    if (!emailCadastro || !senhaCadastro){
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
        style={[styles.input, {marginBottom: 40}]}
        placeholder='nome'
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={[styles.input, {marginBottom: 40}]}
        placeholder='e-mail'
        value={emailCadastro}
        onChangeText={setEmail}
      />

      <TextInput
        style={[styles.input, {marginBottom: 40}]}
        placeholder='senha'
        secureTextEntry
        value={senhaCadastro}
        onChangeText={setSenha}
      />

      <TextInput
        style={[styles.input, {marginBottom: 40}]}
        placeholder='confirmar senha'
        secureTextEntry
        value={validaSenha}
        onChangeText={setValidacao}
      />

      <TouchableOpacity style={styles.buttonEntrar} onPress={camposVazios}>
          <Text style={styles.buttonEntrarText}>Cadastrar</Text>
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
      paddingBlockEnd: 80,
      paddingBlockStart: 150,
    },
    input:{
      backgroundColor: '#ffffff',
      paddingHorizontal: 10,
      color: '#000000',
      width: '80%',
      borderRadius: 5,
    },
    buttonEntrar:{
      paddingBlockStart: 20,
      paddingBlockEnd: 40,
      width: '70%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonEntrarText: {
      backgroundColor: '#FB6400',
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 14,
      paddingHorizontal: '30%',
      paddingVertical: 10,
      borderRadius: 10,
    },
    footer:{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBlockStart: 80,
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
