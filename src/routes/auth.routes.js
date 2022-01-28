import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../pages/Home';
import DetalhesInvestimentos from "../pages/DetalhesInvestimentos";

const AuthStack = createStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }} />

            <AuthStack.Screen
                name="DetalhesInvestimentos"
                component={DetalhesInvestimentos}
                options={{
                    headerStyle: {
                        backgroundColor: '#0038a8',
                        borderBottomWidth: 1,
                        borderBottomColor: '#F9DD16'

                    },
                    headerTintColor: '#F9DD16',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar'
                }}
            />
        </AuthStack.Navigator>
    )
}


export default AuthRoutes;