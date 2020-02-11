import React, {useState} from 'react';
import { View, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../services/api';


export default function Login() {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');

    async function handleSubmit() {
        console.log(email);
        console.log(nome);
        //email, nome.
    }
    return ( 
        <KeyboardAvoidingView behavior="padding" style = {styles.container}> 
         

            <View style={styles.formEmail}>
                <Text style={styles.label}> </Text>
                <TextInput
                style= {styles.input}
                placeholder = "Seu e-mail"
                placeholderTextColor="#999" 
                keyboardType = "email-address"
                autoCapitalize = "none"
                autoCorrect = {false}
                value={email}
                onChangeText = {setEmail}
                />
                </View>
                <View style={styles.formNome}>
                <Text style={styles.label}> </Text>
                <TextInput
                style= {styles.input}
                placeholder = "Nome"
                placeholderTextColor="#999" 
                autoCapitalize = "words"
                autoCorrect = {false}
                value={nome}
                onChangeText = {setNome} // setNome
                />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style = {styles.buttonText}> ABRIR CONTA</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000000',
        alignItems: 'center'
    },

  
    formEmail: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 2,
        
    },

    formNome: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 0,
        marginBottom: 2,

    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 2,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 42,
        marginBottom: 10,
        borderRadius: 10
    },

    button: {
        height: 42,
        backgroundColor: '#4272EE',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    


});