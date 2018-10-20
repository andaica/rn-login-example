import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,
    FlatList, Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IMAGE_LIST = [
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
    }

    renderItem = ({ item, index }) => {
        let imageItem;

        if(this.state.selected.indexOf(index) > -1) {
            imageItem = (
                <TouchableOpacity activeOpacity={.5} onPress={() => this.chooseImage(index)} key={index}>
                    <Image
                        style={[styles.itemImage, this.imageStyle, this.imageChoosedStyle]} 
                        source={{uri: this.images[index]}}
                    />
                    <View style={styles.iconContainer}>
                        <Icon name={this.icon} size={25} color="#FFF" style={styles.icon} />
                    </View>
                </TouchableOpacity>
            )
        } else {
            imageItem = (
                <TouchableOpacity activeOpacity={.5} onPress={() => this.chooseImage(index)} key={index}>
                    <Image
                        style={[styles.itemImage, this.imageStyle]} 
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
            this.props.onSelect(this.images[index]);
        }
    }

    render() {
        if(this.props.data) {
            this.images = this.props.data;
        } else {
            this.images = IMAGE_LIST;
        }

        this.settingColumn = this.props.column || 3;
        this.imageChoosedStyle = this.props.choosedStyle || {};
        this.imageStyle = {
            width: (Dimensions.get('window').width / this.settingColumn) - 2,
            height: (Dimensions.get('window').width / this.settingColumn)
        }
        this.icon = this.props.icon || "check-circle";

        return (
            <View style={styles.container} behavior='padding' enabled>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        {this.state.selected.length} images has been selected
                    </Text>
                </View>
                
                <FlatList
                    numColumns={this.settingColumn}
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
    },
    itemImage: {
        margin: 1,
    },
    iconContainer: { 
        position: 'absolute', 
        zIndex: 99, 
        width: '100%', 
        alignItems: 'flex-end', 
        height: '100%',
    }, 
    icon: {
        marginTop: 5,
        marginRight: 5
    }
});