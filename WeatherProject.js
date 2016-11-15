/**
 * Created by hudahai on 16/11/15.
 */

import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput,Image } from 'react-native';

var Forecast = require('./Forecast');

var WeatherProject = React.createClass({

    getInitialState(){
        return ({
            zip:'',
            forecast:{
                main: '默认数据main',
                description: '默认数据description',
                temp: '默认数据temp',
            }
        });
    },

    _handleTextChange(event){

        console.log(event.nativeEvent.text);
        var  zip = event.nativeEvent.text;
        this.setState({
            zip: event.nativeEvent.text
        });

        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + zip + '&units=imperial'+'&APPID=daeb82b4d38c8703ec014ef1304c051b')
        .then((response) => response.json())
        .then((responseJSON) => {
            console.log(responseJSON);
            this.setState({
                        forecast: {
                         main: responseJSON.weather[0].main,
                         description: responseJSON.weather[0].description,
                         temp: responseJSON.main.temp,
                     }
                 });
            })
            .catch((error) =>{
                console.warn(error);
            });
    },

    render(){

        var content = null;
        if (this.state.forecast !== null){
           content = <Forecast
                main={this.state.forecast.main}
                description={this.state.forecast.description}
                temp={this.state.forecast.temp}/>
        }

        return (
            <View styel={styles.container}>
                <Text style={styles.welcome}>
                    You input {this.state.zip}.
                </Text>

                <TextInput
                    style={styles.input}
                    returnKeyType='go'
                    onSubmitEditing={this._handleTextChange}
                />

                {content}
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#4D4D4D',
    },

    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    },

    input:{
        fontSize:20,
        borderWidth:2,
        height:40,
    },
});

module.exports = WeatherProject;