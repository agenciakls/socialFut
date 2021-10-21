import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Friends from './pages/Friends';
import Games from './pages/Games';
import Team from './pages/Team';
import Championship from './pages/Championship';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Jogadores'
            }
        },
        Friends: {
            screen: Friends,
            navigationOptions: {
                title: 'Jogadores'
            }
        },
        Games: {
            screen: Games,
            navigationOptions: {
                title: 'Jogos'
            }
        },
        Team: {
            screen: Team,
            navigationOptions: {
                title: 'Times'
            }
        },
        Championship: {
            screen: Championship,
            navigationOptions: {
                title: 'Campeonatos'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil'
            }
        },
    })
);
function StackScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'My home' }}
        />
      </Stack.Navigator>
    );
  }
export default Routes;