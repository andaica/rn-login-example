import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, 
    TextInput, TouchableOpacity, ScrollView,
    FlatList, Alert, Dimensions
} from 'react-native';

const IMAGE_LIST = [
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
    'https://facebook.github.io/react-native/docs/assets/favicon.png',
];

export default class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: [],
        };
        this.images = IMAGE_LIST;
    }

    renderItem = ({ item, index }) => {
        let imageItem;

        if(this.state.selected.indexOf(index) > -1) {
            imageItem = (
                <TouchableOpacity activeOpacity={.5} onPress={() => this.chooseImage(index)} key={index}>
                    <Image
                        style={styles.itemImageChoosed} 
                        source={{uri: this.images[index]}}
                    />
                </TouchableOpacity>
            )
        } else {
            imageItem = (
                <TouchableOpacity activeOpacity={.5} onPress={() => this.chooseImage(index)} key={index}>
                    <Image
                        style={styles.itemImage} 
                        source={{uri: this.images[index]}}
                    />
                </TouchableOpacity>
            )
        }
        return imageItem;
    };

    chooseImage = (index) => {
        let arr = this.state.selected;
        if (arr.indexOf(index) > -1) {
            arr.splice(arr.indexOf(index), 1);
            this.setState({
                selected: arr
            })    
        } else {
            arr.push(index);
            this.setState({
                selected: arr
            })
        }
    }

    render() {
        return (
            <View style={styles.container} behavior='padding' enabled>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        {this.state.selected.length} images has been selected
                    </Text>
                </View>
                
                <FlatList
                    numColumns={3}
                    contentContainerStyle={styles.listImages}
                    data={this.images}
                    renderItem={this.renderItem}
                    extraData={this.state.selected.length}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6F7',
        // paddingTop: 24,
        flexDirection: 'column'
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        backgroundColor: 'yellow',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 25
    },
    listImages: {
        // justifyContent: 'center',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // margin: 20,
    },
    itemImage: {
        width: (Dimensions.get('window').width / 3) - 2,
        height: (Dimensions.get('window').width / 3),
        margin: 1,
    },
    itemImageChoosed: {
        width: 100,
        height: 100,
    }
});