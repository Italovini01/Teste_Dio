// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import symbolOn from './assets/pictures/symbol-on.png';
import symbolOff from './assets/pictures/symbol-off.png';

// integrando as funçoes
export default function App() {
  const [isActive, setisActive] = useState (false)
  const [ligado, funcaoLigar] = useState(false)

// nomeando as funçoes
  function handleSymbol(){

    setisActive((oldValue:boolean) =>{
      return !oldValue
    })
    console.log('Bem-vindo Italo')
  }
  // posso adicionar textos dentro da tag VIEW
  return (
    <View style={isActive ? styles.containerOn : 
      styles.containerOff
    }>
      <TouchableOpacity onPress={handleSymbol}>
      <Image source={isActive ? symbolOn : symbolOff}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: '#48dbfb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff:{
    flex: 1,
    backgroundColor:'#ff9f43',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
