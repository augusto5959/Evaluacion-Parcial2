import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../src/screens/Screen1';
import { Screen2 } from '../src/screens/Screen2';
import { Screen3 } from '../src/screens/Screen3';
import { Screen5 } from '../src/screens/Screen5';
import { Screen4 } from '../src/screens/Screen4';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
      <Stack.Screen name="Screen4" component={Screen4} />
      <Stack.Screen name="Screen5" component={Screen5} />
      </Stack.Navigator>
  );
}