import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'

import styles from './footer.style';
import { icons } from '../../../constants';

const Footer = ({url}) => {
  const [wishlist, setWishlist] = useState(false);
   
  return (
    <View style = {styles.container}>
      <TouchableOpacity style= {styles.likeBtn(wishlist)} onPress={()=> setWishlist((prev)=> !prev)}>
        <Image source={(wishlist) ? icons.heartOutline : icons.heart} resizeMode='contain' style = {styles.likeBtnImage}/>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.applyBtn} onPress={()=> Linking.openURL(url)}>
        <Text style = {styles.applyBtnText}>Apply for Job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer