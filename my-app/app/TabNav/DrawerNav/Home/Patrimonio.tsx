import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Link } from "expo-router";
import Itens from "@components/Itens";

const Patrimonio = () => {

    return(
        <View style={styles.container}>
            <ScrollView>
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />

            </ScrollView>

            <View style={styles.addButtonContainer}>
                <Link href="/Additens" asChild>
                    <AntDesign name="pluscircle" size={50} color="red"  />
                </Link>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    addButtonContainer: {
        position: "absolute",
        bottom: 20,
        right: 0,
        margin: 20,
    },
    text: {
        color: "#000",
        fontSize: 16,
    }, 
});
    
export default Patrimonio;

