import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';


function Games() {
    contentPerson = [];
    const [value, onChangeText] = React.useState('Encontre um jogador');

    for (let i = 0; i <= 24; i++) {
        contentPerson.push(
            <View key={i} style={styles.container}>
                <Text key="list-02" style={styles.preTitle}>Terça-feira, 04/02/20202</Text>
                <Text key="list-01" style={styles.title}>Galera do Fut</Text>
            </View>
        )
    }

    return (
        <ScrollView>
            
            <Button
                    titleStyle={styles.buttonTitle}
                    buttonStyle={styles.button}
                    icon={
                        <Icon
                            name="plus-circle"
                            size={15}
                            color="white"
                        />
                    }
                    iconLeft
                    title=" Novo Jogo"
                />
            <View style={styles.menuGames}>
              <Text style={styles.textGames}>Últimos Jogos</Text>
              <Text style={styles.textGames}>Próximos Jogos</Text>
              <Text style={styles.textGames}>Que Você Perdeu</Text>
            </View>
            <View style={styles.content}>
                {contentPerson}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    menuGames: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textGames: {
      paddingVertical: 5,
      paddingHorizontal: 10
    },
    content: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '96%', 
        backgroundColor: '#cdcdcd',
        marginVertical: 5,
        marginHorizontal: '2%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
    },
    title: {
        color: "#3E3E3E",
        fontSize: 15,
        fontWeight: 'bold',
        paddingVertical: 2
    },
    preTitle: {
        color: "#9E9E9E",
        fontSize: 12,
        paddingVertical: 2
    },
    image: {
        width: 90,
        height: 90,
        marginVertical: 3,
        borderRadius: 90
    },
    button: {
        backgroundColor: '#006D37',
        paddingVertical: 3,
        paddingHorizontal: 7,
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 15
    },
    buttonTitle: {
        fontSize: 18
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
    }
});

export default Games;