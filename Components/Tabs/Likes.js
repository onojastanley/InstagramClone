import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";



class Likes extends Component {

   

    render() {
        return (
	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Likes!</Text>
    </View>
            
        );
    }
}
export default Likes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});