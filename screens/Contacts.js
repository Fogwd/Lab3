
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native'; 
import { fetchContacts } from '../utils/api';
import ContactListItem from '../component/ContactListItem';
import {fetchContactsLoading, fetchContactsSuccess, fetchContactsError} from '../store'; 
import { useDispatch, useSelector } from 'react-redux';

const keyExtractor = ({ phone }) => phone;
const Contacts = ({navigation})=> 
    { 
        const {contacts,loading,error} = useSelector((state)=>state); 
        const dispatch = useDispatch(); 
        //Load du lieu 
        useEffect(()=>{ 
            dispatch(fetchContactsLoading()); 
            fetchContacts() 
            .then( 
                (contacts)=> dispatch(fetchContactsSuccess(contacts)))
            .catch(()=>dispatch(fetchContactsError())) ;
        },[]) 
        //sort 
        const contactsSorted = contacts.slice().sort((a, b) => a.name.localeCompare(b.name));
    const renderContact = ({item}) => { 
        const { name, avatar, phone } = item; 
        return <ContactListItem  
                    name={name}  
                    avatar={avatar}  
                    phone={phone}   
                    onPress={() => navigation.navigate("Profile",{ contact: item })} 
                />; 
    }; 

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator color="blue" size="large" />}
            {error && <Text>Error...</Text>} 
            {!loading && !error && (
                <FlatList
                data={contactsSorted}
                keyExtractor={keyExtractor}
                renderItem={renderContact} /> 
                )
            }
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white', 
        justifyContent: 'center', 
        flex: 1,
    },
});

export default Contacts;