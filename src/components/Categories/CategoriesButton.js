import React from "react";
import { StyleSheet,View, Text , TouchableOpacity, Image } from "react-native";

export function CategoriesButton({ categoria, icon, onPress }) {
    const buttonTitle = "Presionar";

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Image source={icon} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.text}>{categoria}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 10,
    },
    button: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // To add a shadow effect
    },
    icon: {
        width: 50,
        height: 50,
    },
    text: {
        marginTop: 10,
        fontSize: 16,
        color: '#000',
    },
});