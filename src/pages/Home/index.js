import { View, Text, StyleSheet, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
    {
        id: 1,
        label: 'Fatura cartão',
        value: '600,00',
        date: '15/11/2022',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'Pix Carla Cristine',
        value: '200,00',
        date: '14/11/2022',
        type: 1 // entradas
    },
    {
        id: 3,
        label: 'Salário',
        value: '3.500,00',
        date: '10/11/2022',
        type: 1 // despesas
    },
    {
        id: 4,
        label: 'Boleto Vivo',
        value: '100,00',
        date: '22/11/2022',
        type: 0 // despesas
    },
    {
        id: 5,
        label: 'Pix Lucas Martins',
        value: '5.000,00',
        date: '19/11/2022',
        type: 1 // despesas
    },
]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Olá Black Card" />
            
            <Balance saldo="18.700,00" gastos="-700,0"/>

            <Actions/>

            <Text style={styles.title}>Últimas movimentações</Text>

            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={ (item) => String(item.id)}
                showsVerticalScrollIndicator={true}
                renderItem={ ({ item }) => <Movements data={item} />}       
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
     },
     title:{
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14,
     },
     list:{
        marginStart: 14,
        marginEnd: 14,
     }
});