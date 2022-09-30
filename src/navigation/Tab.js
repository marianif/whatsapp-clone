import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import StackNavigator from "./Stack";
import { Calls, Status, Camera } from "../screens";
import colors from "../constants/colors";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.light.background,
        tabBarStyle: {
          backgroundColor: colors.light.tint,
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.light.background,
        },
      }}
    >
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <FontAwesome
              name="camera"
              size={20}
              color={colors.light.background}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ChatStack"
        component={StackNavigator}
        options={{
          title: "Chat",
        }}
      />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
