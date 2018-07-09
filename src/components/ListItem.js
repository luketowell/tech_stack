import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../Actions';


class ListItem extends Component {
    selectedItem() {
        const selected = this.props.selected;
        const { title, description } = this.props.library.item;

        if (selected) {
            return (
                <View>
                <CardSection extraStyles={styles.headerSectionStyles}>
                        <Text style={styles.Header}>{title}</ Text>
                </CardSection>
                <CardSection>
                    <Text style={styles.descText}>{description}</Text>
                </CardSection>
            </ View>
            );
        } 
        return (
            <View>
                <CardSection extraStyles={styles.headerSectionStyles}>
                    <Text style={styles.Header}>{title}</ Text>
                </CardSection>
            </View>
        );
    }

    render() {
        console.log(this.props);
        const { id } = this.props.library.item;
        
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                    {this.selectedItem()} 
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

const mapStateToProps = (state, ownProps) => {
    const selected = state.selectedLibraryID === ownProps.library.item.id;
    return { selected };
};

export default connect(mapStateToProps, actions)(ListItem);
