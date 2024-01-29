// Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { Card } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.1.6:3000/postlogin', {
        email,
        password,
      });

      // Jika login berhasil, arahkan ke halaman beranda (gantilah 'Home' dengan nama halaman beranda yang sesuai)
      navigation.navigate('App',{ screen: 'Home' }, { username: response.data.username });
    } catch (error) {
      // Jika login gagal, tampilkan pesan kesalahan
      console.error(error);
      // Tambahkan logika atau state untuk menampilkan pesan kesalahan kepada pengguna
      alert('Login gagal. Periksa kembali username dan password Anda.');
    }
  };

  const handleRegisterPress = () => {
    // Navigasi ke halaman pendaftaran (gantilah 'Register' dengan nama halaman pendaftaran yang sesuai)
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Title>LOGIN TERLEBIH DAHULU</Card.Title>
        <Card.Divider />
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Text style={{ fontSize: 30 }}>👤</Text>
          <View style={{ width: 268, height: 40, marginLeft: 10, backgroundColor: '#3E3232', borderWidth: 0, borderRadius: 10 }}>
            <TextInput
              placeholder='Email' style={{ color: 'white', fontWeight: 'bold' }}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
          <Text style={{ fontSize: 30 }}>🔒</Text>
          <View style={{ width: 268, height: 40, marginLeft: 10, backgroundColor: '#3E3232', borderWidth: 0, borderRadius: 10 }}>
            <TextInput
              placeholder='Password' style={{ color: 'white', fontWeight: 'bold' }}
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
        <Button title="Masuk" onPress={handleLogin} />
        <TouchableOpacity onPress={handleRegisterPress} style={{ marginTop: 10 }}>
          <Text style={{ color: 'blue', textDecorationLine: 'underline', fontSize: 18 }}> Belum Punya Akun? Daftar Dulu</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

export default Login;
