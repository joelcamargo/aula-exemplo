import { StyleSheet, Text, View } from 'react-native';
import Tela1 from './src/componentes/Tela1';
import Tela2 from './src/componentes/Tela2';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import config from './src/database/config'
import { createConnection } from 'typeorm';
import { useCallback, useEffect } from 'react';


const Stack = createNativeStackNavigator();
const nome = "Nome Usuario: "
export default function App() {
  const connect = useCallback(async () => {
    try {
      const connection = await createConnection(config);
 //outros códigos aqui
    } catch (err) {
      console.log(err)
    }
  })
  useEffect(() => {
    connect()
  }, [])
 










  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Tela1}/>
        <Stack.Screen name='NovaTela' component={Tela2} options={({route}) => ( {title: route.params.titulo})} />
      </Stack.Navigator>
     
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
