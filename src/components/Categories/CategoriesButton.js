import React from "react";
import { View, Text ,Button } from "react-native";

export function CategoriesButton({categoria, icon, onPress}) {
    return (
        <View>
            <Button
                icon={icon}
                onPress={onPress}
            />
            <Text>
                categoria={categoria}
            </Text>
        </View>
    );
}
