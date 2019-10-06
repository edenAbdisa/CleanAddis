import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {db,firestore} from "../firestore/firestoreConfig";
class Signup extends React.Component {
    state = {
        fName: '',
        lName:'',
        phoneNumber:'',
        roleId:'a6i9cS8NzIt2qKElD7KN',
        imageUrl:'./src/Images',
        email: '',
        password: ''
    }
    handleSignUp = () => {
        const {fName,lName,phoneNumber,roleId,imageUrl, email, password } = this.state
        db.collection('user').add({
            fName:fName,
            lName:lName,
            phoneNumber:phoneNumber,
            roleId:roleId,
            imageUrl:imageUrl,
            email:email,
            password:password
        });
        firestore.auth().createUserWithEmailAndPassword(email, password)
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    value={this.state.fName}
                    onChangeText={fName => this.setState({ fName })}
                    placeholder='First Name'
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.lName}
                    onChangeText={lName => this.setState({ lName })}
                    placeholder='Last Name'
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.phoneNumber}
                    onChangeText={phoneNumber => this.setState({ phoneNumber })}
                    placeholder='phoneNumber'
                />

                <TextInput
                    style={styles.inputBox}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#FFA611',
        borderColor: '#FFA611',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    }
})

export default Signup;