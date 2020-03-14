/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {CHANGE_NAME} from './app/action/type'


 class App extends Component {

   buttonClick=()=>{
    this.props.changeName("Bharat chaudhary")
   
    console.log("click")
    }
  render() {
    console.log("click"+this.props.name)
    console.log("click"+this.props.last_name)

    return (
      <View><Button title="clikc" onPress={this.buttonClick}></Button>
      <Text>{this.props.name}</Text>
      </View>
    )
  }
  componentWillMount()
  {
 
}
}
const mapStateToProps=(state)=>{
  return{
    name:state.name,
    last_name:state.last_name
  }
}
const mapDispatchProps = dispatch => {
return{
  changeName:(value)=>dispatch({ type: CHANGE_NAME,paylaod:value}),
  changeNametest:(value)=>dispatch({ type: CHANGE_NAME,paylaod:value})
}
}
 


export default connect(mapStateToProps,mapDispatchProps)(App)




