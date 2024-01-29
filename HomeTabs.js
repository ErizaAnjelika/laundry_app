// HomeTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/component/Home/Home';
import Transaksi from './src/component/Transaksi/Transaksi';
import Setting from './src/component/Setting/setting';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();


const HomeTabs = () => {
  const navigation = useNavigation();
  // Fungsi yang akan dipanggil saat logout
  const handleLogout = () => {
    // Lakukan aksi yang diperlukan saat logout di sini
    console.log('Logout berhasil');
    navigation.navigate('Login');
  };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Beranda',
          title: 'Beranda',
          tabBarIcon: () => (
            <Text style={{ color: 'white', fontSize: 20 }}>🏠</Text>
          ),
          tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold', color: 'white', margin: 2 },
          tabBarStyle: {
            backgroundColor: 'black',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 60,
            padding: 10,
          },
        }}
      />
      <Tab.Screen
        name="Transaksi"
        component={Transaksi}
        options={{
          tabBarLabel: 'Transaksi',
          tabBarIcon: () => (
            <Text style={{ color: 'white', fontSize: 20 }}>🛒</Text>
          ),
          tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold', color: 'white', margin: 2 },
          tabBarStyle: {
            backgroundColor: 'black',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 60,
            padding: 10,
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        // Meneruskan prop onLogout ke komponen Setting
        initialParams={{ onLogout: handleLogout }}
        options={{
          tabBarLabel: 'Pengaturan',
          title: 'Pengaturan',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color: 'white', fontSize: 20 }}>⚙️</Text>
          ),
          tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold', color: 'white', margin: 2 },
          tabBarStyle: {
            backgroundColor: 'black',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 60,
            padding: 10,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
