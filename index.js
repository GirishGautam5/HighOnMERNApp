/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/frontend/Redux/store';

if (__DEV__) {
  // console.disableYellowBox = true;
  // eslint-disable-next-line no-console
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
