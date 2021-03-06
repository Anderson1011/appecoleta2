import React from 'react';
import { View, StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import  { useNavigation} from '@react-navigation/native';

import {Feather, FontAwesome} from '@expo/vector-icons';
import {RectButton, TouchableOpacity} from 'react-native-gesture-handler';



export default function Detalhes() {

navigation = useNavigation();

function voltaTela(){
  navigation.goBack();
}

 return (
   <SafeAreaView style={{flex:1}}>
   
   <View style={styles.container}>
     <TouchableOpacity onPress={voltaTela}>
     <Feather name="arrow-left" size={20} color="#34cb79"/>
     </TouchableOpacity>

     <Image style={styles.pointImage} source={{uri: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg'}}/>
    <Text style = {styles.pointName}>Pizzaria donos da Pizza</Text>
    <Text style={styles.pointItems}> Papelão e oleo de cozinha </Text>
  
  <View style={styles.address}>
    <Text style = {styles.addresTitle}>Endereço</Text>
    <Text style = {styles.addressContent}> av portal dos ipes </Text>
  </View>

</View>


<View style={styles.footer}>

<RectButton style={styles.button} onPress = {() => { }}>
 <FontAwesome name="whatsapp" size={20} color="#FFF"/>
 <Text style={styles.buttonText}>Whatsapp</Text> 
</RectButton>

<RectButton style={styles.button} onPress = {() => { }}>
 <Feather name="mail" size={20} color="#FFF"/>
 <Text style={styles.buttonText}>E-mail</Text> 
</RectButton>

</View>

  </SafeAreaView> 
   
  );
}
const styles= StyleSheet.create({
container:{
  flex: 1,
  padding: 32,
  paddingTop: 60,
},
pointImage:{
  width: '100%',
  height: 120,
  resizeMode: 'cover',
  borderRadius: 10,
  marginTop: 32

},
pointName:{
  color: '#322153',
  fontSize: 28,
  marginTop: 24
},
pointItems:{
fontSize: 16,
marginTop: 8,
color: '#6C6C80'
},
address:{
marginTop: 32,

},
addresTitle: {
  color: '#322153',
  fontSize: 16,
  fontWeight:'bold'
},
addressContent:{
  marginTop: 8,
  color:'#6C6C80'
  
},
footer:{
  borderColor: '#999',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingVertical: 20,
  paddingHorizontal: 32,
  paddingBottom: 15,


},
button:{
  width: '48%',
  backgroundColor: '#34CB79',
  borderRadius: 10,
  height: 50,
  flexDirection: 'row',
  justifyContent: 'center',
  alignContent: 'center',

},
buttonText:{
  marginLeft: 8,
  color: '#FFF',
  fontSize: 16,
}

});