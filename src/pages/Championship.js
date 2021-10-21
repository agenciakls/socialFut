import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function Championship() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/icon-white.png')}></Image>
      <Text key="list-01" style={styles.title}>SocialFut</Text>
      <Text key="list-02" style={styles.subtitle}>O melhor aplicativo de futebol</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#206104',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: "#FFF",
      fontSize: 50,
    },
    subtitle: {
      color: "#FFF",
      fontSize: 20,
    },
    image: {
      width: 180,
      height: 180
    }
  });

export default Championship;