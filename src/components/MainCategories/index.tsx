import React from 'react'
import { View, Text } from 'react-native'
import CategoryItem from '../CategoryItem'
import styles from './styles'
import categoriesGetir from '../../../assets/categoriesGetir'
import { useState } from 'react'
import { Category } from '../../models'

function index() {
    const [categories, setCategoeies] = useState<Category[]>(categoriesGetir)
  return (
    <View>
      <View style = {styles.listContainer}>
        {
            categories.map((item) => (
                <CategoryItem key = {item.id} item={item}/>
            ))
        }
        

        
      </View>
    </View>
  )
}

export default index