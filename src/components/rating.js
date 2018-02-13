import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'


const Rating = (data) => {
    console.log(data)


    let Ratings = []
    for (let k = 0; k < 5; k++){
        if (k < data.stars){
            console.log('dataatat', k)
            Ratings.push(
                <Text 
                    style={{ marginLeft: 10 }}
                    key={k}>A</Text>
            )
        } else {
            console.log('daaa', k)
            Ratings.push(   
                <Text 
                    style={{ marginLeft: 10 }}
                    key={k}>B</Text>
            )
        }
    }

    console.log(Ratings)

    return (
        <View style={{ flexDirection: 'row' }}>
            {Ratings}
        </View>
    )
}

export default Rating