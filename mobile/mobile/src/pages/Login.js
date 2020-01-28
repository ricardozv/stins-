import React from 'react';
import { View, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import logo from '../assets/logo1.png';

export default function Login() {
    return ( 
        <KeyboardAvoidingView behavior="padding" style = {styles.container}> 
            <Image source = {logo} />

            <View style={styles.formEmail}>
                <Text style={styles.label}>EMAIL* </Text>
                <TextInput
                style= {styles.input}
                placeholder = "Seu e-mail"
                placeholderTextColor="#999" 
                keyboardType = "email-address"
                autoCapitalize = "none"
                autoCorrect = {false}
                />
                </View>
                <View style={styles.formNome}>
                <Text style={styles.label}>NOME </Text>
                <TextInput
                style= {styles.input}
                placeholder = "Nome"
                placeholderTextColor="#999" 
                autoCapitalize = "words"
                autoCorrect = {false}
                />

                <TouchableOpacity style={styles.button}>
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
        height: 44,
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