import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {stateRedux} from '../../interfaces';
import {switchTheme} from '../../store/actions';
import {darkTheme, lightTheme} from '../../styles/theme';

// import { Container } from './styles';

const Pesquisa: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: stateRedux) => state.themeReducer.theme);

  return (
    <View>
      <Text>{JSON.stringify(theme.mode)}</Text>
      <Button
        title="Switch Theme"
        onPress={() =>
          dispatch(switchTheme(theme.mode === 'dark' ? lightTheme : darkTheme))
        }
      />
    </View>
  );
};

export default Pesquisa;
