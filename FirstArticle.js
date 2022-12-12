import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View ,ScrollView, Image, Button,ActivityIndicator,Alert,handleOkPress} from 'react-native';
const Article = () => {
  const [loading, setLoading]=useState(false);
  let actionOnPress = ()=> setLoading(!loading)
  const[but,setBut] =useState("Load more")
  
  return(
    
    <>
       
         <View style={styles.square}>
           
           <Text style={styles.text}><Text style={styles.header}>First article:</Text>{'\n'}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
         
          </View>

         <View style={styles.square}>
           
           <Text style={styles.text}><Text style ={styles.header}>Second article:</Text>{'\n'}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
         
          </View>
          <View style={styles.square}>
           
           <Text style={styles.text}><Text style ={styles.header}>Third article: </Text>{'\n'}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          
          </View>
          <View>
          
          <Button title={loading? "loading" : "Load more"}
          onPress={actionOnPress}
         />
          
          {loading ? (<ActivityIndicator animating={loading}
          size="small"
          color="#0000ff"/>) : null  } 
          {loading && <ActivityIndicator/>? Alert.alert(
           "Unable To Load",
           "There was an error.Please try again",
           [
            { 
           text: "OK", 
          onPress: ()=> setLoading ((prevVal => !prevVal))}
            
            ],
          ) : null
          
          }

          
          
          </View>
          <View style={{height:100}}>
            
            </View>
          </>
         



        

     
          
      
       
    
   
  );
}
export default function FirstArticle() {
  return (
    
   <Article/>
   
  );
}

const styles = StyleSheet.create({
  container1: {
    
   flexDirection:'column',
   justifyContent:'center',
   justifyContent:'space-around',
   paddingStart:15,
   paddingEnd:15, 

  },
  
   square:{
   
    height:400,
    width:350,
    justifyContent:'space-between',
    left:15,
    margin:20,
  
   },

   header:{
    fontSize:20,
    fontWeight:'bold',
    
   },
   text:{
    backgroundColor:"#FDEBD0",
    fontSize:20,
    padding:20,

   },
   
  })
  