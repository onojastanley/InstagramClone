import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";



class Profile extends Component {

   

    render() {
        return (
	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
            
        );
    }
}
export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});