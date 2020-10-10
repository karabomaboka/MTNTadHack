import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//IMPORT PAGES
import HomePage from "./HomePage";
import CreateOfferPage from "./CreateOfferPage";
import BorrowPage from "./BorrowPage";
import ProfilePage from "./ProfilePage";
import SearchPage from "./SearchPage";

//STACK
const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateOfferPage"
          component={CreateOfferPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BorrowPage"
          component={BorrowPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProfilePage"
          options={{
            headerShown: false,
          }}
          component={ProfilePage}
        />
        <Stack.Screen name="SearchPage" component={SearchPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    //flex: 1,

    backgroundColor: "#fff",
  },
});
export default Main;
