import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordion extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
  
  render() {

    return (
       <View>
            <TouchableOpacity ref={this.accordion} style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
                    <Text>{this.props.data}</Text>    
                </View>
            }
            
       </View>
    )
  }

  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        color: '#3b5998',
        borderStyle: 'solid',
        fontSize: 18
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        marginLeft: 57,
        width: 260,
        paddingRight:18,
        alignItems:'center',
        borderColor: '#3b5998',
        backgroundColor: '#fdfbfb',
        borderWidth: 1,
        borderRadius: 6
    },
    parentHr:{
        height:1,
        color: 'white',
        width: 250
    },
    child:{
        backgroundColor: '#dddddd',//'#fdfbfb',
        padding:16,
        paddingLeft: 24,
        paddingRight: -5,
        marginLeft: 57,
        width: 260,
    }
    
});