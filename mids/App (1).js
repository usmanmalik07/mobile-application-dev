import React from 'react';
import { Text, View, Image, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function App() {

  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');


  var onSubmit = () => {
    if (username == '' && password == '') {
      Alert.alert("Enter Username and Password first");
    } else if (username == '') {
      Alert.alert("Enter Username");
    } else if (password == '') {
      Alert.alert("Enter Password");
    } else {
      Alert.alert("Submitted");
    }
  }

  var valid = () => {
    if (username != '' && password != '') {
      return true;
    } else {
      return false;
    }
  }

  return (
    <View style = {styles.container}>
      <Text style = {styles.heading}>Login</Text>
      <Image style = {styles.img} source = {require('./assets/abc.jpg')} ></Image>

      <View style = {styles.viewStyle}>

        <Text style = {styles.normalText}> Username :  </Text>
        <TextInput style = {styles.input} placeholder="Enter Username here" value={username} onChangeText={onChangeUsername}/>
        
        <Text style = {styles.normalText}> Password :  </Text>
        <TextInput style = {styles.input} placeholder="Enter Password here" value={password} onChangeText={onChangePassword}/>

        <Button style = {styles.btn} title="Submit" disabled={valid() ? false : true} onPress = {onSubmit}/>

        <Text style = {styles.smolText}> No account? <Text style = {styles.link} onPress={() => Alert.alert("Sign Up")}> Sign Up Here </Text></Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  heading: {
    margin: 24,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  normalText: {
    fontSize: 20,
  },
  smolText: {
    marginTop: 50,
    color : 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  link: {
    fontWeight: 'bold',
    color: 'blue',
  },
  input: {
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    margin: 50,
    textAlign: 'center',
  },
  viewStyle: {
    margin: 10,
    padding: 5,
  },
  img:{
    width: 80,
    height: 80,
    alignSelf: 'center',
  }
});