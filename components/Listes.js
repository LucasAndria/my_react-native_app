import React, { useState } from 'react';
import { List, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Listes = (props) => {

    const [check, setCheck] = useState(false)

    const taches = props.t && props.t.map(tache => (
        tache.libelle ? (
            <Text style={styles.textBody} key={tache.id}>
                {check ? <input onChange={props.funcR} type="checkbox" checked></input> : <input onChange={props.funcR} type="checkbox" value={tache.id}></input>}
                {tache.libelle + " | "}
                {tache.priorite}
            </Text>) : null
    ))

    const CheckTout = () => {
        setCheck(!check);
        props.funcTout();
        setCheck(!check);
    }

    return (
        <View style={styles.container}>
            <View style={styles.container__button}>
                <TouchableOpacity style={styles.button__tout} onPress={CheckTout}>
                    <Text style={styles.text}>
                        Cocher tout
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={props.del}
                >
                    <Text style={styles.text}>
                        Supprimer
                    </Text>
                </TouchableOpacity>
            </View>
            {taches}
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        padding: 10,
        height: 40,
    },

    button__tout: {
        backgroundColor: 'blue',
        padding: 10,
        height: 40,
    },

    container: {
        padding: 10,
        marginTop: 3,
    },

    container__button: {
        padding: 10,
        marginTop: 3,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
    },

    textHead: {
        display: 'flex',
        color: "black",
        backgroundColor: "gray",
        alignItems: 'center',
    },
    textBody: {
        color: "black",
        alignItems: 'center',
    },

    text: {
        color: 'black'
    },
});


export default Listes