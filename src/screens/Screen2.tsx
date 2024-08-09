import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../../theme/appTheme'

export const Screen2 = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.tittle}>ITSQMET</Text>
        <Image style={styles.image} source={{uri:'https://itsqmet.hiringroom.com/data/accounts/itsqmet/microsite/102161f242a93e76d31a2f84888f1b86.jpg'}}></Image>
    </View>
  )
}
