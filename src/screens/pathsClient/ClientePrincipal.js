import {View, Text, StyleSheet} from 'react-native';

export default function ClientePrincipal(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Tela Principal do Cliente</Text>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
     text:{
      fontSize: 24,
      fontWeight: 'bold',
    }
  }
);
