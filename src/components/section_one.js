
import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import Rating from './rating'


class SectionOne extends Component {
    state = {
        dataMovies: [
            {
                movies_title: "Test 1",
                rating: 4,
                category: "Drama",
                duration: "3h 12min",
                id: "5a82cbf4969d2e013d4c36ec",
                image: "https://images-na.ssl-images-amazon.com/images/M/MV5BNjllMWJmZTEtODA2Mi00MzY3LThiYmMtZDFjYjQ2NDM2MWJkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg"
            },
            {
                movies_title: "Test 2",
                rating: 5,
                category: "Drama",
                duration: "3h 12min",
                id: "5a82cbf4969d2e013d4c36ec",
                image: "https://images-na.ssl-images-amazon.com/images/M/MV5BNjllMWJmZTEtODA2Mi00MzY3LThiYmMtZDFjYjQ2NDM2MWJkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg"
            },
        ]
    }

    render(){
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ 
                    marginLeft: 20,
                    marginTop: 25,
                    fontSize: 25, 
                    fontWeight: '600' }}>New</Text>
                
                <ScrollView 
                    horizontal={true}
                    style={{ marginLeft: 20, marginTop: 25 }}>
                    {
                        this.state.dataMovies.map((data, index) => (
                            <View key={index} style={{ marginRight: 15 }}>
                                <Image 
                                    style={{ 
                                        borderRadius: 15,
                                        width: 150, height: 200, resizeMode: 'contain' }}
                                    source={{ uri: data.image }} />
                                <Text style={{ 
                                    marginTop: 15,
                                    fontSize: 15,
                                    fontWeight: '500',
                                    textAlign: 'center' }}>{data.movies_title}</Text>
                                <Rating stars={data.rating} />
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

export default SectionOne