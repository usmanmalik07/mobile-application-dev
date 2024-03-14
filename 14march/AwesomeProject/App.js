import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleUsernameChange = (text) => {
    setUsername(text);
    checkButtonState(text, password);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    checkButtonState(username, text);
  };

  const checkButtonState = (username, password) => {
    setIsButtonDisabled(username.trim() === '' || password.trim() === '');
  };

  const handleLogin = () => {
    console.log('Logging in...');
  };

  const handleSignup = () => {
    console.log('Navigating to signup page...');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./img/340.jpg')} style={styles.logo} />
      </View>
      
      <View style={styles.loginContainer}>
        <Text style={styles.heading}>Login</Text>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleUsernameChange}
          value={username}
          placeholder="Enter your username"
          placeholderTextColor="#555"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry={true}
          placeholder="Enter your password"
          placeholderTextColor="#555"
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isButtonDisabled ? '#bbb' : '#007bff' }]}
          onPress={handleLogin}
          disabled={isButtonDisabled}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.signupText}>New Member? Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0FFFF',
  },
  logoContainer: {
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  loginContainer: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    color: '#333',
  },
  button: {
    width: 300,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  signupText: {
    fontSize: 16,
    color: '#007bff',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default App;
