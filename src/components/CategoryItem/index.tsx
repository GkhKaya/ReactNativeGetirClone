import React from 'react'
import { TouchableOpacity, Image, Text, Dimensions  } from 'react-native'
import styles from './styles'
import { Category } from '../../models'
const {width, height} = Dimensions.get("window")
type categyItemProps = {
    item:Category
}
function index({item}:categyItemProps) {
  return (
    <TouchableOpacity style = {styles.toucableOpacityStyle}>
        <Image style={{width: width*0.18,height: width*0.18,borderRadius:8}} source={{uri: item.src}}/>
        <Text style = {{fontSize: 12, color: "#616161",fontWeight:"500"}}>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default index