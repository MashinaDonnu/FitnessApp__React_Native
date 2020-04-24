import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Main } from './screens/Main'
import { Recommendations } from './screens/Recommendations';
import CreateTrainingPlan  from './screens/CreateTrainingPlan';
import { Provider } from 'react-redux';
import {store} from './redux/store';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Main">
          <Drawer.Screen name="Скласти програму" component={CreateTrainingPlan} />
          <Drawer.Screen name="Моя сторінка" component={Main} />
          <Drawer.Screen name="Рекомендації" component={Recommendations} />
        </Drawer.Navigator>
      </NavigationContainer>
     </Provider>
  );
}
