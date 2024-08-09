import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../../theme/appTheme'

export const Screen3 = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.tittle}>APLICACIONES MOVILES</Text>
        <Image style={styles.image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHg-H-s_Wfm_EMyo-x9lPVGwXjDYQm1DEohg&s'}}></Image>
    </View>
  )
}
