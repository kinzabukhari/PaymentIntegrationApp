/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BillPaymentScreen from './src/screens/bill_payment/BillPaymentScreen';
import SeerbitHome from './src/screens/seerbit/SeerbitHome';
import PaymentServicesScreen from './src/screens/payment_services/PaymentServicesScreen';
import DialPadScreen from './src/screens/payment_dialpad/DialPadScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={SeerbitHome}
          options={{ 
            headerShown: false,
          }}
          />
        <Stack.Screen 
          name="Bill Payment" 
          component={BillPaymentScreen} 
          options={{ 
            title: "Bill Payment", 
            headerTitleAlign: "center" 
          }}
          />
        <Stack.Screen 
          name="Payment Services" 
          component={PaymentServicesScreen} 
          options={{ 
            title: "Airtime", 
            headerTitleAlign: "center" 
          }}
          />
        <Stack.Screen 
          name="Dialpad" 
          component={DialPadScreen} 
          options={{ 
            title: " ", 
            headerTitleAlign: "center" 
          }}
          />
          
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
