import React from "react";
import { StyleSheet, View, } from "react-native";
import { CategoriesButton } from './CategoriesButton'

export function CategoriesConteiner() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.row}>
                <CategoriesButton
                    icon={require('')}
                    categoria={'Ropa'}
                    onPress={() => console.log('Ropa pressed')}
                />
                <CategoriesButton
                    icon={require('./path/to/icon1.png')}
                    categoria={'Ropa'}
                    onPress={() => console.log('Ropa pressed')}
                />
                </View>
                <View style={styles.row}>
                <CategoriesButton
                    icon={require('')}
                    categoria={'Ropa'}
                    onPress={() => console.log('Ropa pressed')}
                />
                <CategoriesButton
                    icon={require('')}
                    categoria={'Ropa'}
                    onPress={() => console.log('Ropa pressed')}
                />
                </View>
                <View style={styles.row}>
                <CategoriesButton
                    icon={require('')}
                    categoria={'Ropa'}
                    onPress={() => console.log('Ropa pressed')}
                />
                <CategoriesButton
                    icon={require('')}
                    categoria={'Ropa'}
                    onPress={() => console.log('Ropa pressed')}
                />
                </View>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#008080',
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
});