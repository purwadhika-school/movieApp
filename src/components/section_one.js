
import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import Rating from './rating'
import { connect } from 'react-redux'
import { fetchMoviesOne } from '../actions'


class SectionOne extends Component {
    componentDidMount(){
        this.props.dispatch(fetchMoviesOne())
    }


    render(){
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ 
                    marginLeft: 20,
                    marginTop: 25,
                    fontSize: 25, 
                    fontWeight: '600' }}>New</Text>
                
                {
                    this.props.dataMoviesOne.length > 0 && (
                        <ScrollView 
                            horizontal={true}
                            style={{ marginLeft: 20, marginTop: 25 }}>
                            {
                                this.props.dataMoviesOne.map((data, index) => (
                                    <View key={index} style={{ marginRight: 15 }}>
                                        <Image 
                                            style={{ 
                                                borderRadius: 15,
                                                width: 150, height: 200, resizeMode: 'contain' }}
                                            source={{ uri: data.image }} />
                                        <Text style={{ 
                                            marginTop: 15,
                                            marginLeft: 10,
                                            fontSize: 15,
                                            fontWeight: '500' }}>{data.movies_title}</Text>
                                        <Rating stars={data.rating} />
                                    </View>
                                ))
                            }
                        </ScrollView>
                    )
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        dataMoviesOne: state.moviesOne.items
    }
}

export default connect(mapStateToProps) (SectionOne)