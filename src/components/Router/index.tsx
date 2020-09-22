import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {BaseThemeInterface, stateRedux} from '../../interfaces';
import Favoritos from '../../pages/Favoritos';
import Home from '../../pages/Home';
import {switchTheme} from '../../store/actions';
import Pesquisa from '../../pages/Pesquisa';
import {TitleContainer, TitlePage} from './styles';
import {darkTheme, lightTheme} from '../../styles/theme';

const Router: React.FC<{theme: BaseThemeInterface}> = ({theme}) => {
  const Theme = useSelector((state: stateRedux) => state.themeReducer.theme);
  const dispatch = useDispatch();
  const Tab = createBottomTabNavigator();
  const Icons = {
    Home: {true: 'ios-home', false: 'ios-home-outline'},
    Favoritos: {true: 'ios-bookmarks', false: 'ios-bookmarks-outline'},
    Pesquisa: {
      true: 'ios-search',
      false: 'ios-search',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <TitleContainer>
        <TitlePage>BlockMovie</TitlePage>
        <Ionicons
          name="ios-videocam-outline"
          size={24}
          color={Theme.PRIMARY_TEXT_COLOR}
          onPress={() =>
            dispatch(
              switchTheme(Theme.mode === 'dark' ? lightTheme : darkTheme),
            )
          }
        />
      </TitleContainer>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              const iconName = Icons[`${route.name}`][focused];
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: Theme.PRIMARY_BUTTON_COLOR,
            inactiveTintColor: Theme.PRIMARY_TEXT_COLOR,
            style: {
              backgroundColor: Theme.PRIMARY_BACKGROUND_COLOR,
              borderTopWidth: 0,
            },
            labelStyle: {
              fontFamily: 'Montserrat-Medium',
              fontSize: 11,
            },
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
