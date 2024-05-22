import React from "react";
import { StyleSheet } from "react-native";
import { CategoriesButton } from '../CategoriesButton'

export function CategoriesConteiner() {
    return (
        <View>
            <CategoriesButton
                icon={''}
                categoria={'Ropa'}
            />
            <CategoriesButton
                icon={''}
                categoria={'Zapatos'}
            />
            <CategoriesButton
                icon={''}
                categoria={'Papel'}
            />
            <CategoriesButton
                icon={''}
                categoria={'Plasticos'}
            />
            <CategoriesButton
                icon={''}
                categoria={'Muebles pequeños'}
            />
            <CategoriesButton
                icon={''}
                categoria={'Residuos electronicos'}
            />
        </View>
    );
}
