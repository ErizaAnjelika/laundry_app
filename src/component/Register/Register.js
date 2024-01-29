// Register.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,Picker } from 'react-native';
import { styles } from './style';
import { Card } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigation = useNavigation();

  
  const handleRegister = async () => {
    // const role = setRole ? 'admin' : 'pelanggan';

    const data = {
      name: name,
      password: password,
      email: email,
      role: role, 
    };
   
    console.log("Nilai Role:", role);
    console.log("Nilai Data:", data);
    try {
      // Ganti URL dengan URL API registrasi Anda
      const response = await axios.post('http://192.168.1.6:3000/postregister', data);
       console.log('====================================');
       console.log(response.data);  
       console.log('====================================');
      // Jika registrasi berhasil, arahkan ke halaman beranda (gantilah 'Home' dengan nama halaman beranda yang sesuai)
      navigation.navigate('App',{ screen: 'Home' });
    } catch (error) {
      // Jika registrasi gagal, tampilkan pesan kesalahan
      console.error(error.response.data);
      // Tambahkan logika atau state untuk menampilkan pesan kesalahan kepada pengguna
      alert('Registrasi gagal. Periksa kembali data yang Anda masukkan.');
    }
  };

  const handleLoginPress = () => {
    // Navigasi ke halaman login (gantilah 'Login' dengan nama halaman login yang sesuai)
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Title>REGISTRASI TERLEBIH DAHULU</Card.Title>
        <Card.Divider/>
          <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={{fontSize: 30}}>👤</Text>
              <View style={{width: 268,height: 40, marginLeft: 10, backgroundColor: '#3E3232', borderWidth: 0, borderRadius: 10}}>
                <TextInput
                  placeholder='Nama' style={{color: 'white', fontWeight: 'bold'}}
                  onChangeText={(text) => setName(text)}
                />
              </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
              <Text style={{fontSize: 30}}>📧</Text>
              <View style={{width: 268,height: 40, marginLeft: 10, backgroundColor: '#3E3232', borderWidth: 0, borderRadius: 10}}>
                <TextInput
                  placeholder='Email' style={{color: 'white', fontWeight: 'bold'}}
                  onChangeText={(text) => setEmail(text)}
                />
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
              <Text style={{fontSize: 30}}>🔒</Text>
              <View style={{width: 268,height: 40, marginLeft: 10, backgroundColor: '#3E3232', borderWidth: 0, borderRadius: 10}}>
                <TextInput
                  placeholder='Password' style={{color: 'white', fontWeight: 'bold'}}
                  onChangeText={(text) => setPassword(text)}
                />
            </View>
          </View> 
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
              <Text style={{fontSize: 30}}>⚙️</Text>
              <View style={{width: 268,height: 40, marginLeft: 10, backgroundColor: '#3E3232', borderWidth: 0, borderRadius: 10}}>
                    <TextInput
                    placeholder='Role' style={{color: 'white', fontWeight: 'bold'}}
                    onChangeText={(text) => {
                      console.log('Nilai Role:', text);
                      const lowerCaseText = text.toLowerCase(); // Ubah ke huruf kecil
                      if (lowerCaseText === 'admin' || lowerCaseText === 'pelanggan') {
                        setRole(lowerCaseText);
                      } else {
                        // Tampilkan pesan kesalahan atau lakukan aksi lain jika role tidak valid
                        console.error('Peran yang dimasukkan tidak valid. Gunakan "admin" atau "pelanggan".');
                      }
                    }}
                    />
                </View>
          </View>  
          <Button title="Daftar" onPress={handleRegister} />
        <TouchableOpacity onPress={handleLoginPress} style={{ marginTop: 10 }}>
          <Text style={{ color: 'blue', textDecorationLine: 'underline', fontSize: 18 }}> Sudah Punya Akun? Login</Text>
        </TouchableOpacity>
      </Card>
    </View>
    
  );
};

export default Register;




