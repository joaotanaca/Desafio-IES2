import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {BaseThemeInterface, stateRedux} from '../../interfaces';
import Favoritos from '../../pages/Favoritos';
import Home from '../../pages/Home';
import {switchTheme} from '../../store/actions';
import Pesquisa from '../../pages/Pesquisa';

const Router: React.FC<{theme: BaseThemeInterface}> = ({theme}) => {
  const Theme = useSelector((state: stateRedux) => state.themeReducer.theme);
  const Tab = createBottomTabNavigator();
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'ios-home-outline';
              } else if (route.name === 'Favoritos') {
                iconName = focused ? 'ios-bookmarks' : 'ios-bookmarks-outline';
              } else {
                iconName = 'ios-search';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: Theme.PRIMARY_BUTTON_COLOR,
            inactiveTintColor: Theme.PRIMARY_TEXT_COLOR,
            style: {backgroundColor: Theme.PRIMARY_BACKGROUND_COLOR},
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Pesquisa" component={Pesquisa} />
          <Tab.Screen name="Favoritos" component={Favoritos} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const mapStateToProps = (state: {themeReducer: {theme: any}}) => ({
  theme: state.themeReducer.theme,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  switchTheme: bindActionCreators(switchTheme, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
