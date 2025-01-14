//Importação das Bibliotecas Necessárias
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import PathScreen from '../screens/PathScreen';

//Telas Cliente
import ClienteLogin from '../screens/pathsClient/ClienteLogin';
import ClienteCadastro from '../screens/pathsClient/ClienteCadastro';
import ClientePrincipal from '../screens/pathsClient/ClientePrincipal';
import ClienteDetalheLivroPrincipal from '../screens/pathsClient/ClienteDetalheLivroPrincipal';
import ClienteBiblioteca from '../screens/pathsClient/ClienteBiblioteca';
import ClienteDetalheLivroBiblioteca from '../screens/pathsClient/ClienteDetalheLivroBiblioteca';

//Telas Gerente
import GerenteLogin from '../screens/pathsAdm/GerenteLogin';

const Stack = createStackNavigator();


export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName = "Path">
        <Stack.Screen name="Path" component={PathScreen} options={{title: 'Caminhos'}} />
        <Stack.Screen name="ClienteLogin" component={ClienteLogin} options={{title: 'Login Cliente'}} />
        <Stack.Screen name="GerenteLogin" component={GerenteLogin} options={{title: 'Login Gerente'}} />
        <Stack.Screen name="ClienteCadastro" component={ClienteCadastro} options={{title: 'Cadastro Cliente'}} />
        <Stack.Screen name="ClientePrincipal" component={ClientePrincipal} options={{title: 'Principal Cliente'}} />
        <Stack.Screen name="ClienteDetalheLivroPrincipal" component={ClienteDetalheLivroPrincipal} options={{title: 'Detalhe Livro Cliente'}} />
        <Stack.Screen name="ClienteBiblioteca" component={ClienteBiblioteca} options={{title: 'Biblioteca Cliente'}} />
        <Stack.Screen name="ClienteDetalheLivroBiblioteca" component={ClienteDetalheLivroBiblioteca} options={{title: 'Detalhe Livro Biblioteca Cliente'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
