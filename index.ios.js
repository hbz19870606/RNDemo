import React, { Component } from 'react';
import { AppRegistry, View, Text, TouchableHighlight, NativeModules } from 'react-native';

var WeatherProject = require('./WeatherProject');

AppRegistry.registerComponent('entranceJS', () => WeatherProject);
