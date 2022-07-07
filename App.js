import { StyleSheet, Text, View } from 'react-native';
// import Counter from './components/Counter';
import Form from './components/Form';

export default function App() {
  // const title1="Let's Start Counting...";
  return (

    <>
     <View style={styles.container}>
      {/* <Counter title1= {title1}/>*/}
     <Form/>
     </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textelement:{
    marginTop:20,
    fontSize: 45,
    borderBottomWidth:2,
    borderBottomColor:"aqua"
  }
});