import React from 'react'
import { Picker, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

function Ajout(props) {

    const handleTache = (d) => {
        props.funcT(d)
    }

    const handlePro = (d) => {
        props.funcP(d)
    }

    return (
        <View className="ajout_container">
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Saisir votre todo………………………………"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={handleTache}
            />

            <Picker
                selectedValue={props.p}
                style={{
                    margin: 15,
                    height: 40,
                    borderColor: '#7a42fa',
                    borderWidth: 1
                }}
                onValueChange={handlePro}>
                <Picker.Item label="Low" value="Low" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="High" value="High" />
            </Picker>

            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => props.funcA()}
            >
                <Text style={styles.submitButtonText}> Ajouter </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    input: {
        margin: 15,
        height: 40,
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

export default Ajout
