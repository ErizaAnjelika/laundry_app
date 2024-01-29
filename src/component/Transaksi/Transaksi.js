import { useState,useEffect } from 'react';
import { View, Text, TextInput, Button,StyleSheet, ScrollView} from 'react-native';
import { styles } from './style';
import { Card} from '@rneui/themed';
import { Table, Row } from 'react-native-table-component';
import axios  from 'axios';
import moment from 'moment';


export default function Transaksi() {

    const [namaDepan, setNamaDepan] = useState('');
    const [transactionData, setTransactionData] = useState(null);

    const fetchData = async () => {
        try {
            const cleanedNamaDepan = namaDepan.trim();
          // Ganti 'http://localhost:3000' dengan URL API Anda
        const response = await axios.get(`http://192.168.1.6:3000/transaksidetail/${encodeURIComponent(namaDepan)}`);

          setTransactionData(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
          // Tambahkan logika untuk menangani error
          alert('Error', 'Gagal mengambil data transaksi.');
        }
      };
    
      const handleSearch = () => {
        // Pastikan namaDepan tidak kosong sebelum memanggil API
        if (namaDepan.trim() !== '') {
          fetchData();
        } else {
          alert('Peringatan', 'Silakan masukkan nama terlebih dahulu.');
        }
      };

      

  return (
    <View style={styles.container}>
    <Card containerStyle={styles.card}>
      <Card.Title>MASUKKAN NAMA ANDA UNTUK MELIHAT RIWAYAT TRANSAKSI</Card.Title>
      <Card.Divider/>
        <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{fontSize: 30}}>👤</Text>
            <View style={{width: 268,height: 40, marginLeft: 10, borderWidth: 0, borderRadius: 10,marginBottom: 10}}>
              <TextInput
                placeholder='Masukkan Nama' placeholderTextColor='#B0B0B0' style={{color: 'black', fontWeight: 'bold'}} onChangeText={(text) => setNamaDepan(text)}
              />
            </View>
        </View>
        
        <Button title="Cari" onPress={handleSearch}/>
    </Card>

    {transactionData && transactionData.length > 0 ? (
        <ScrollView style={styles.container}>
        {transactionData.map((item, index) => (
          <View key={index} style={styles.transactionContainer}>
          <Text style={styles.transactionTitle}>Detail Transaksi:</Text>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionDetail}>Nama: {item.namaDepan}</Text>
            <Text style={styles.transactionDetail}>Email: {item.email}</Text>
            <Text style={styles.transactionDetail}>Nomor Telepon: {item.nomorTelepon}</Text>
            <Text style={styles.transactionDetail}>Tanggal Penerimaan: {moment(item.tgl_penerimaan).format('DD-MM-YYYY')}</Text>
            <Text style={styles.transactionDetail}>Tanggal Pengambilan: {moment(item.tgl_pengambilan).format('DD-MM-YYYY')}</Text>
            <Text style={styles.transactionDetail}>Berat: {item.berat} kg</Text>
            <Text style={styles.transactionDetail}>Harga Total: Rp {item.harga_total}</Text>
            <Text style={{fontSize: 15, color: 'black',backgroundColor: 'lightblue',padding: 10}}>Status Pesanan: {item.status_pesanan}</Text>
          </View>
        </View>
        
        ))}
      </ScrollView>
      ) :  <Text style={styles.header}>Tidak ada data transaksi untuk nama tersebut.</Text>}
  </View>
  )
}


  
