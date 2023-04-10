import { Image, StyleSheet, TextInput, View } from 'react-native'
import React from 'react';
import { Colors, Constants } from '../utils';
import SearchIcon from "../../assets/images/search_icon.png";

const ContactInput = (props) => (
    <View >
        <TextInput 
            placeholder={props.placeholder}
            value={props.value}
            autoCorrect={false}
            autoCapitalize={props.autoCapitalize}
            onChangeText={props.onChangeText}
            keyboardType={props.keyboardType}
            style={[styles.contactInput, props.style]}
        />
    </View>
);

const CustomInput = (props) => (
    <View >
        <TextInput 
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            value={props.value}
            autoCorrect={false}
            autoCapitalize={props.autoCapitalize}
            onChangeText={props.onChangeText}
            style={[styles.customInput, props.style]}
            keyboardType={props.keyboardType}
        />
    </View>
);

const CustomSearchBar = (props) => (
    <View style={styles.searchBarView}>
        <Image source={SearchIcon} />
        <TextInput
            placeholder={props.placeholder}
            value={props.value}
            autoCorrect={false}
            autoCapitalize={props.autoCapitalize}
            onChangeText={props.onChangeText}
            style={[styles.customSearchInput, props.style]}
        />
    </View>
)

const styles = StyleSheet.create({
    contactInput: {
        padding: 10,
        color: Colors.black,
    },
    customInput: {
        padding: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 5,
        borderColor: Colors.gray,
        borderWidth: 1,
    },
    customSearchInput: {

    },
    searchBarView: {
        flexDirection: Constants.row,
        backgroundColor: Colors.gray,
        borderRadius: 5,
        alignItems: Constants.center,
        paddingHorizontal: 10
    },
});

export { ContactInput, CustomInput, CustomSearchBar }
