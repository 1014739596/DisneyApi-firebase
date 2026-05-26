import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebaseConfig';

// Importar componentes
import Login from './src/componentes/Login';
import Registro from './src/componentes/Registro';
import Home from './src/componentes/Home'; // Disney API
import Original from './src/componentes/Original'; // tu idea creativa
import Perfil from './src/componentes/Perfil';
import Logout from './src/componentes/Logout';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  // 🔐 Detectar usuario autenticado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
      setCargando(false);
    });

    return unsubscribe;
  }, []);

  // ⏳ Pantalla de carga
  if (cargando) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>

        {usuario ? (
          // ✅ USUARIO LOGUEADO
          <>
            <Tab.Screen name="Inicio" component={Home} />
            <Tab.Screen name="Original" component={Original} />
            <Tab.Screen name="Perfil" component={Perfil} />
            <Tab.Screen name="Salir" component={Logout} />
          </>
        ) : (
          // ❌ NO LOGUEADO
          <>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Registro" component={Registro} />
          </>
        )}

      </Tab.Navigator>
    </NavigationContainer>
  );
}