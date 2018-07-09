import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../Actions';


class ListItem extends Component {
    render() {
        console.log(this.props);
        const { id, title, description } = this.props.library.item;
        
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection extraStyles={styles.headerSectionStyles}>
                        <Text style={styles.Header}>{title}</ Text>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.descText}>{description}</Text>
                    </ CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    Header: {
        color: '#000000',
        fontSize: 20
    },
    headerSectionStyles: {
        justifyContent: 'center'
    },
    descText: {
        fontSize: 18
    }

};

export default connect(null, actions)(ListItem);
