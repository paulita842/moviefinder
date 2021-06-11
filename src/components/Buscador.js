import React from "react";
import {StyleSheet, TextInput } from "react-native";


const Buscador = () => {

  const [text, onChangeText] = React.useState("Buscar Película");
  
  return (
    <View style={styles.seeker}> 
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        
    </View>
  );
};

const styles = StyleSheet.create({
      input: {
        margin: 12,
        borderWidth: 1,
        height: 50,
        borderColor:'#E91E21',
        borderRadius:5,  
      },

      seeker:{
        backgroundColor:'#E6ECEF',
        flex:1,
      },
      text1:{
        marginTop:45,
        flexDirection:'row',
        color:'#E91E21',
        textAlign:'center',
        justifyContent: 'center',
        fontWeight:'bold',
        fontSize: 25,
      },
});

export default Buscador;



