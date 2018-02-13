import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'


const Rating = (data) => {
    let Ratings = []
    for (let k = 0; k < 5; k++){
        if (k < data.stars){
            Ratings.push(
                <Image 
                    key={k}
                    style={{ width: 15, height: 15 }}
                    source={require('./img/star_full.png')} />
            )
        } else {
            Ratings.push(   
                <Image 
                    key={k}
                    style={{ width: 15, height: 15 }}
                    source={require('./img/star_empty.png')} />
            )
        }
    }

    

    return (
        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
            {Ratings}
        </View>
    )
}

export default Rating