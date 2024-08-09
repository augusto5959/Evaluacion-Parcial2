import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../../theme/appTheme'

interface Props{
    textButton: string,
    action:string
}

export const OperationButton = ({textButton, action}:Props) => {
  return (
    <TouchableOpacity 
            style={styles.button}
            onPress={action}
        >
            <Text style={styles.textButton}>{textButton}</Text>
        </TouchableOpacity>
  )
}
