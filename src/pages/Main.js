import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

function Main({navigation}) {
    contentPerson = [];
    const [value, onChangeText] = React.useState('Encontre um jogador');

    for (let i = 1; i <= 24; i++) {
        contentPerson.push(
            <View key={i} style={styles.container}>
                <Avatar
                    size="large"
                    rounded
                    source={require('../../assets/image-example.jpg')}
                />
                <Text key="list-01" style={styles.title}>Fábio Freitas</Text>
                <Text key="list-02" style={styles.subtitle}>Zagueiro | 2 Vitórias</Text>
                <Button
                 onPress={() => navigation.navigate('Profile')}
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
            </View>
        )
    }

    return (
        <ScrollView>
            <Input
                inputStyle={styles.inputText}
                placeholder=' Encontre um Jogador'
                leftIcon={
                    <Icon
                        name='user'
                        size={18}
                        color='#9E9E9E'
                    />
                }
            />
            <View style={styles.content}>
                {contentPerson}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexGrow: 2,
    },
    container: {
        width: '44%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cdcdcd',
        marginHorizontal: '3%',
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
    },
    title: {
        color: "#3E3E3E",
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingVertical: 2
    },
    subtitle: {
        color: "#9E9E9E",
        fontSize: 12,
        textAlign: 'center',
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
        marginVertical: 5
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
    }
});

export default Main;