import {db,firestore} from '../firestore/firestoreConfig';
import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

class Login extends React.Component {
    state={
        email:'',
        password;''
    }
    loginSelected(){
       const {email,password}=this.state;
       //const user= db.collection('user').get(this.state.email)
       firestore.auth().signInWithEmailAndPassword(email, password)
    }
    render(){
    return(
    <View style={styles.container}>
                    <TextInput
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        placeholder='Email'
                        autoCapitalize='none'
                    />
                    <TextInput
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        placeholder='Password'
                        secureTextEntry={true}
                    />
                    <TouchableOpacity >
                        <Text >Login</Text>
                    </TouchableOpacity>
                    <Button title="Don't have an account yet? Sign up" />
                </View>

    )
    }
}
export default Login;