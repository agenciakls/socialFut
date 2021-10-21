import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

function Profile({navigation}) {
    return (
        <ScrollView>
                <View style={styles.container}>
                <Avatar
                    style={styles.image}
                    size="xlarge"
                    rounded
                    source={require('../../assets/image-example.jpg')}
                />
                <Text key="list-01" style={styles.title}>Fábio Freitas</Text>
                <Text key="list-02" style={styles.subtitle}>Zagueiro | 2 Vitórias</Text>
                <Button
                    titleStyle={styles.buttonTitle}
                    buttonStyle={styles.button}
                    icon={
                        <Icon
                            name="plus-circle"
                            size={13}
                            color="white"
                        />
                    }
                    iconLeft
                    title=" Seguir"
                />
                <View style={styles.boxDetails}>
                    <View style={styles.boxGames}>
                        <Text style={styles.titleGames}>Gols</Text>
                        <Text style={styles.numberGames}>13</Text>
                    </View>
                    <View style={styles.boxGames}>
                        <Text style={styles.titleGames}>Jogos</Text>
                        <Text style={styles.numberGames}>7</Text>
                    </View>
                    <View style={styles.boxGames}>
                        <Text style={styles.titleGames}>Pontos</Text>
                        <Text style={styles.numberGames}>114</Text>
                    </View>
                    <View style={styles.boxGames}>
                        <Text style={styles.titleGames}>Vitórias</Text>
                        <Text style={styles.numberGames}>2</Text>
                    </View>
                </View>
                <Divider />
                <View style={styles.boxOthers}>
                    <View style={styles.boxLevel}>
                        <Text style={styles.titleLevel}>Nível</Text>
                        <Text style={styles.contentLevel}>Iniciante 2</Text>
                    </View>
                    <View style={styles.boxLevel}>
                        <Text style={styles.titleLevel}>Posição</Text>
                        <Text style={styles.contentLevel}>Zagueiro</Text>
                    </View>
                    <View style={styles.boxLevel}>
                        <Text style={styles.titleLevel}>Time</Text>
                        <Text style={styles.contentLevel}>Galera do Fut</Text>
                    </View>
                    <View style={styles.boxLevel}>
                        <Text style={styles.titleLevel}>Ponto Forte</Text>
                        <Text style={styles.contentLevel}>Chute a Distância</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
    },
    title: {
        color: "#3E3E3E",
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingVertical: 3
    },
    subtitle: {
        color: "#9E9E9E",
        fontSize: 15,
        textAlign: 'center',
        paddingVertical: 3
    },
    image: {
        width: 150,
        height: 150,
        marginVertical: 25,
        borderRadius: 150
    },
    button: {
        backgroundColor: '#006D37',
        paddingVertical: 3,
        paddingHorizontal: 7,
        marginVertical: 15
    },
    buttonTitle: {
        fontSize: 12
    },
    inputText: {
        backgroundColor: '#E3E3E3',
        borderColor: '#9E9E9E',
        borderWidth: 1,
        color: '#9E9E9E',
        margin: 15,
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 20
    },
    boxDetails: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 2
    },
    boxGames: {
        backgroundColor: '#efefef',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '46%',
        marginHorizontal: '2%',
        marginVertical: '2%',
        borderRadius: 12
    },
    titleGames: {
        padding: 15,
        fontWeight: 'bold'
    },
    numberGames: {
        padding: 15
    },
    boxOthers: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 2
    },
    boxLevel: {
        backgroundColor: '#efefef',
        display: 'flex',
        flexDirection: 'column',
        width: '46%',
        marginHorizontal: '2%',
        marginVertical: '2%'
    },
    titleLevel: {
        paddingHorizontal: 15,
        paddingTop: 10,
        fontWeight: 'bold'
    },
    contentLevel: {
        paddingHorizontal: 15,
        paddingTop: 5,
        paddingBottom: 15
    }
});

export default Profile;