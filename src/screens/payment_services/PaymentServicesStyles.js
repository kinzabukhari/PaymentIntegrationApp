import { StyleSheet, Dimensions } from "react-native";
import { Colors, Constants } from "../../utils";

const { deviceHeight, deviceWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: deviceHeight,
        width: deviceWidth,
        padding: 20,
        backgroundColor: Colors.white,
        
    },
    pickerContainer: {
        borderColor: Colors.gray,
        borderWidth: 0.7,
        borderRadius: 6,
        marginVertical: 20,

    },
    sectionContainer: {
        marginBottom: 20,
    },
    categoryStyles: {
        flexDirection: Constants.row,
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 5,
    },
    sectionHeaderText: {
        marginBottom: 10,
    },
    activeCategory: {
        backgroundColor: Colors.lightGreen, 
        paddingVertical: 10, 
        width: '48%', 
        margin: 3, 
        alignItems: Constants.center,
    },
    activeText: {
        color: Colors.darkGreen,
    },
    inactiveText: {
        color: Colors.black,
    },
    inactiveCategory: {
        paddingVertical: 10, 
        width: '48%', 
        margin: 3, 
        alignItems: Constants.center,
    },

    contactInputView: {
        borderRadius: 5,
        flexDirection: Constants.row,
        alignItems: Constants.center,
        borderColor: Colors.gray,
        borderWidth: 1,
        marginVertical: 10
    },
    contactInput: {
        width: 240,
        borderColor: Colors.gray,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    contactIconView: {
        height: 49.5,
        paddingHorizontal: 20,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderLeftColor: Colors.gray,
        borderLeftWidth: 1,
    },
    contactTouch: {
        flexDirection: Constants.row,
        marginTop: 15,
        alignItems: Constants.center,
        justifyContent: Constants.center,
    },
    contactIconText: {
        marginLeft: 6,
        color: Colors.contactColor
    },
    payWithView: {
        flexDirection: Constants.row,
        alignItems: Constants.center,
        justifyContent: Constants.spaceBetween,
        marginVertical: 10
    },
    payWithBorder: {
        width: 140,
        borderColor: Colors.gray,
        borderBottomWidth: 1,
    },


    


});

export default styles;
