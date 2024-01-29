import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AuthStack from './AuthStack'
import Register from './src/component/Register/Register';
import HomeTabs from './HomeTabs';

const Stack = createStackNavigator()

export default function App(){
    
   
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Auth" options={{headerShown: false}} component={AuthStack}/>
            <Stack.Screen name='Register' component={Register} /> 
            <Stack.Screen name="App" component={HomeTabs} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>  
  )
}
