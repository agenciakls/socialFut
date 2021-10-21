import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

function HeaderPage() {

    return (
        <Header
            barStyle="light-content"
            backgroundColor="#006D37"
            leftComponent={{ icon: 'home', color: '#fff' }}
            centerComponent={{ text: 'SocialFut', style: { color: '#fff' } }}
            rightComponent={{ icon: 'menu', color: '#fff' }}
        />
    );
}

const styles = StyleSheet.create({

});

export default HeaderPage;