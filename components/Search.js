import React, { useState } from 'react'
import { Picker, StyleSheet, Text, TextInput, View } from 'react-native';

function Search({ taches }) {

    const [P, setP] = useState("");
    const [res, setRes] = useState("");

    const recupP = (e) => {
        setP(e)
        if (e !== "") {
            setRes(taches.filter(tache => {
                if (tache.priorite.toLowerCase().includes(e.toLowerCase())) { return tache }
            }))
        } else { setRes('') }
    }

    const recupT = (e) => {
        if (P !== "") {
            setRes(taches.filter(tache => {
                if (tache.libelle.toLowerCase().includes(e.toLowerCase()) && tache.priorite === P) { return tache }
            }))
        }
        else {
            setRes(taches.filter(tache => {
                if (tache.libelle.toLowerCase().includes(e.toLowerCase())) { return tache }
            }))
        }
    }


    return (

        <View>
            <View style={styles.search_container}>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Search Todo……………"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={recupT}
                />
                <Picker
                    style={{
                        margin: 15,
                        height: 20,
                        fontSize: 12,
                        borderColor: '#7a42fa',
                        borderWidth: 1
                    }}
                    onValueChange={recupP}>
                    <Picker.Item label="" value="" />
                    <Picker.Item label="Low" value="Low" />
                    <Picker.Item label="Medium" value="Medium" />
                    <Picker.Item label="High" value="High" />
                </Picker>
            </View>
            <View style={styles.search_results}>
                {res ? res.map(tache => (
                    <Text key={tache.id}>{tache.libelle + " | " + tache.priorite}</Text>
                )) : null}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    search_container: {
        display: "flex",
        flexDirection: "row",
    },

    search_results: {
        padding: 10,
        marginTop: 3,
        display: "flex",
        justifyContent: "center",
    },

    input: {
        margin: 15,
        height: 20,
        borderColor: '#7a42fa',
        borderWidth: 1
    },

    submitButton: {
        backgroundColor: '#7a42fa',
        padding: 10,
        margin: 15,
        height: 40,
        alignItems: 'center',
    },

    submitButtonText: {
        color: 'white',
    }
});


export default Search
