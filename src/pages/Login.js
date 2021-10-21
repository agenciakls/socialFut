import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SocialIcon } from 'react-native-elements';

function Login() {
    return (
        <View style={styles.boxMain}>
            <Text style={styles.textView}>Clique em entrar para se conectar</Text>
            <SocialIcon
                title='Entrar com Facebook'
                button
                type='facebook'
                style={styles.ButtonFacebook}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    boxMain: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    textView: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 10
    },
    ButtonFacebook: {
         
    }
});
export default Login;