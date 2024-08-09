import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../../theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native'

interface Props{
    textButton: string,
    useNavigationScreen?: string,
}

export const ButtonComponent = ({textButton, useNavigationScreen}: Props) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.dispatch(CommonActions.navigate({ name: useNavigationScreen }))}
        >
            <Text style={styles.textButton}>{textButton}</Text>
        </TouchableOpacity>
    )
}
