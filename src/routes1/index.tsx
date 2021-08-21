import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Cadastre } from "../screens/Cadastre";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator 
      initialRouteName="Cadastre"
    >
      <Screen 
        name='Cadastre'
        component={Cadastre}
      />
      <Screen 
        name='SignIn'
        component={SignIn}
      />
    </Navigator>
  )
}
