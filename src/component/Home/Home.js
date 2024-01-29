import axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import messaging from '@react-native-firebase/messaging';

export default function Home() {
    const [layananData, setLayananData] = useState([]);
    const [barangData, setBarangData] = useState([]);
    const [unitData,setUnitData] = useState([]);

    useEffect(() => {
        fetchUnit()
        fetchBarang()
        fetchData()
    },[])

    useEffect(() => {
        requestNotificationPermission();
    }, [])
    const requestNotificationPermission = async () => {
    const granted = await messaging().requestPermission();
    if (granted) {
      const token = await messaging().getToken();
      console.log('FCM Token:', token);
    } else {
      console.log('Notification permission denied');
    }
  };
    const fetchData = async () => {
        try {
            const response= await axios.get('http://192.168.1.6:3000/getJasaLaundry')
            setLayananData(response.data)
            console.log(response.data);
        } catch (error) {
            console.log("error fethcing data", error);
        }   
    }

    const fetchBarang = async () => {
        try {
            const response= await axios.get('http://192.168.1.6:3000/getBarangLaundry')
            setBarangData(response.data)
            console.log(response.data);
        } catch (error) {
            console.log("error fethcing data", error);
        }
    }

    const fetchUnit = async () => {
        try {
            const response= await axios.get('http://192.168.1.6:3000/getUnitMesinCuci')
            setUnitData(response.data)
            console.log(response.data);
        } catch (error) {
            console.log("error fethcing data", error);
        }
    }
  return (
    <View>
        <View style={styles.header}>
            <Text style={{fontWeight: 'bold', fontSize: 20, padding: 16, color: 'white'}}>Selamat Datang, di LuxeLaundry</Text>
        </View>

        {/* Body */}
        
        <View style={styles.body}> 
            {/* Card Layanan Kami */}
            <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 16, color: 'black'}}>Layanan Kami    ➡️➡️➡️</Text>
            <ScrollView horizontal={true} > 
                <View style={styles.container}>
                    {layananData.map((item, index) => (
                        <View style={styles.card} key={index}>
                        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#0E1446'}}>{item.namaJasa}</Text>
                        <Text style={{fontSize: 15, color: '#898B96', marginTop: 10}}>Biaya : Rp {item.biaya}/kg</Text>
                        <Text style={{fontSize: 15, color: '#898B96',marginTop: 10}}>Keterangan : {item.deskripsi}</Text>
                        <Text style={{fontSize: 15, color: '#898B96',marginTop: 10}}>Estimasi : {item.estimasi}</Text>
                    </View>
                    ))}
                </View>
            </ScrollView>

            {/* untuk unit mesin cuci */}
            <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 16, color: 'black', marginTop: 16}}>Jenis Barang   ➡️➡️➡️</Text>
            <ScrollView horizontal={true} > 
                <View style={styles.container}>
                    {barangData.map((item, index) => (
                        <View style={styles.card} key={index}>
                        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#0E1446'}}>{item.jenisBarang}</Text>
                        <Text style={{fontSize: 15, color: '#898B96',marginTop: 10}}>Rp {item.biaya} </Text>
                        <Text style={{fontSize: 15, color: '#898B96',marginTop: 10}}>Keterangan : {item.deskripsi} </Text>
                    </View>
                    ))}
                </View>
            </ScrollView>

            {/* untuk Jenis Barang yang bisa di laundry */}
            <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 16, color: 'black', marginTop: 16}}>Unit Mesin Cuci & Setrika   ➡️➡️➡️</Text>
            <ScrollView horizontal={true} > 
                <View style={styles.container}>
                    {unitData.map((item, index) => (
                        <View style={styles.card} key={index}>
                        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#0E1446'}}>{item.namaMesinCuci}</Text>
                        <Text style={{fontSize: 15, color: '#898B96',marginTop: 10}}>Merek : {item.merek}</Text>
                        <Text style={{fontSize: 15, color: '#898B96',marginTop: 10}}>Kapasitas : {item.kapasitas} kg</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
        
        
    </View>
  )
}

const styles = StyleSheet.create({
    body:{
        width: 800,
        height: 580,
        
    },
    container: {
      flexDirection: 'row', // Mengatur arah tata letak menjadi horizontal
      padding: 8,
      flexWrap: 'wrap', 
    },
    header: {
        width: 360,
        borderRadius: 10,
        height: 60,
        margin: 16,
        backgroundColor: '#0E1446',
    },
    card: {
      width: 172, // Sesuaikan lebar card sesuai kebutuhan
      height: 150, // Sesuaikan tinggi card sesuai kebutuhan
      backgroundColor: '#fff',
      elevation: 5,
      padding: 16,
      marginHorizontal: 16,
      borderRadius: 8,
      marginBottom: 16,
    },
  });
