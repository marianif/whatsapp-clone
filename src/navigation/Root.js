import { createStackNavigator } from "@react-navigation/stack";
import colors from "../constants/colors";
import TabNavigator from "./Tab";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.light.tint,
        },
        headerTitleStyle: {
          color: colors.dark.text,
        },
      }}
    >
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          title: "Whatsapp",
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
