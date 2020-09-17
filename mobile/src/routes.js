import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import main from './pages/main';
import profile from './pages/profile';

const Routes = NavigationContainer( 
    createStackNavigator({
        main: {
            screen: main,
            navigationOptions:{
                 title: 'DevRadar'
            },
        } ,
        profile: {
            screen: profile,
            navigationOptions: {
                title: 'Perfil no Github'
            }
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#7D40E7',
            },
        },
    })
  );
  
  export default Routes;