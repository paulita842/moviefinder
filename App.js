import React, {useState} from 'react';
import {View,Text,Image, StyleSheet,TextInput, ScrollView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const App = () => {
  const [movieName, setMovieName] = useState('');
    const moviesList =[
      {
      id:1,
      name:'avenger',
      image: require('./src/assets/avenger.jpeg' )
     },
     {
      id:2,
      name:'coco',
      image: require('./src/assets/coco.jpeg')
     },
     {
      id:3,
      name:'conjuro',
      image: require('./src/assets/conjuro.jpeg')
     },

     {
      id:4,
      name:'final',
      image: require('./src/assets/final.jpeg')
     },

     {
      id:5,
      name:'godzilla',
      image: require('./src/assets/godzilla.jpeg')
     },
     {
      id:6,
      name:'hombre Araña',
      image: require('./src/assets/hombrearaña.jpeg')
     },
     {
      id:7,
      name:'intensamente',
      image: require('./src/assets/intensamente.jpeg')
     },
     {
      id:8,
      name:'titanic',
      image: require('./src/assets/titanic.jpeg')
     },
     {
      id:9,
      name:'aladdin',
      image: require('./src/assets/aladdin.jpeg')
     },
     {
      id:10,
      name:'avatar',
      image: require('./src/assets/avatar.jpeg')
     },
     {
      id:11,
      name:'barbie',
      image: require('./src/assets/barbie.jpeg')
     },
     {
      id:12,
      name:'capitana',
      image: require('./src/assets/capitana.jpeg')
     },
     {
      id:13,
      name:'deapooll',
      image: require('./src/assets/deapool.jpeg')
     },
     {
      id:14,
      name:'increibles',
      image: require('./src/assets/increibles.jpeg')
     },
     {
      id:15,
      name:'iroman',
      image: require('./src/assets/iroman.jpeg')
     },
    
    ]

    const moviesFiltered = moviesList.filter(item => item.name.toLowerCase().includes(movieName))

    const renderMovies = item => {
      return(
        <View style={styles.list}>
        <Text style={styles.movie}>{item.name}</Text>
          <Image source={item.image} style={styles.image}/>
        </View>
      )
    };
    return (  
      <ScrollView>
        <View style={styles.caja}>
          <Text style={styles.encabezado}>MOVIE FINDER</Text>
          <View style={styles.seeker}>  
          <Icon name="search" size={30} color="#CCCCCC"/>
          <TextInput
          style={styles.seeker}
          placeholder="Buscar Película"
          value={movieName}
          onChangeText={value => setMovieName(value)}
          />
          </View>
          <FlatList
          data={moviesFiltered}
          keyExtractor={item => item.id}
          renderItem={({item}) => renderMovies(item)}
          />
        </View>
        </ScrollView>
    );
 
};

const styles = StyleSheet.create({
  seeker:{
    flexDirection:'row',
    backgroundColor:'white',
    padding:5,
    margin:10,
    borderRadius:20,
    alignItems:'center',
    alignItems:'center',
    alignContent:'center',
    display:"flex",
    fontSize: 20,
    padding: 4,
  },
  encabezado:{
    fontSize: 25,
    textAlign:'center',
    marginTop:15,
    fontWeight:'bold',
    color:"#E91E63"
  },
  caja:{
    backgroundColor:"#FAD0C3",
    flex:1,
  },
  image: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width:250,
    height:250,
    marginTop:10
  },
 
  list:{
    margin:20,
  },
  movie:{
    fontSize: 22,
    textAlign:'center',
    textTransform:'uppercase',
    fontWeight:'bold'
  }
}
)

export default App;
