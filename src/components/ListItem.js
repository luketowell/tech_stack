import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection } from './common';


class ListItem extends Component {
    render() {
        console.log(this.props);
        return (
            <View>
                <CardSection extraStyles={styles.headerSectionStyles}>
                    <Text style={styles.Header}>{this.props.library.item.title}</ Text>
                </CardSection>
                <CardSection>
                    <Text style={styles.descText}>{this.props.library.item.description}</Text>
                </ CardSection>
            </View>
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

export default ListItem;
