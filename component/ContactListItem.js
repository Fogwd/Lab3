
import React from 'react';
import {StyleSheet, View, TouchableHighlight, Text, Image,} from 'react-native';
import PropTypes from 'prop-types';
import color from '../utils/color'; 

const ContactListItem=({ name, avatar, phone, onPress}) =>
{
    return (
    <TouchableHighlight underlayColor={color.grey} 
    style={styles.container} onPress={onPress}>
        <View style={styles.contactInfo}>
            <Image style={styles.avatar} source={{uri: avatar}}></Image>
            <View style={styles.details}>
                <Text style={styles.title}>{name}</Text> 
                <Text style={styles. subtitle}>{phone}</Text>
            </View>
        </View>
    </TouchableHighlight>
    );
}

ContactListItem.propTypes = { 
    name: PropTypes.string, 
    avatar: PropTypes.string,
    phone: PropTypes.string,
    onPress: PropTypes.func,
    };
    
const styles = StyleSheet.create({ 
        container: {
            paddingLeft: 24,
        },
    
        contactInfo: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 16,
            paddingBottom: 16,
            paddingRight: 24,
            borderBottomColor: color.grey, 
            borderBottomWidth: StyleSheet.hairlineWidth
        },

        avatar: {
            borderRadius: 22,
            width: 44,
            height: 44,
        },

        details: {
            justifyContent: 'center',
            flex: 1,
            marginLeft: 20,
        },
    
        title: {
            color: color.black,
            fontWeight: 'bold', 
            fontSize: 16,
        },
    
        subtitle: {
            color: color.blue,
            fontSize: 15,
            marginTop: 4, 
        }
    });

export default ContactListItem;


