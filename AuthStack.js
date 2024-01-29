// AuthStack.js
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/component/Login/Login';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Login' component={Login} />
      
    </Stack.Navigator>
  );
};

export default AuthStack;
