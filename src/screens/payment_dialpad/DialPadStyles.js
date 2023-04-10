import { StyleSheet, Dimensions } from "react-native";
import { Colors, Constants } from "../../utils";

const { deviceHeight, deviceWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: Colors.white,
        alignItems: Constants.center,
    },
    iconView: {
        marginTop: 20,
        marginBottom: 7,
        justifyContent: Constants.center,
        alignItems: Constants.center,
    },
    amount: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: Constants.fourHundred,
        fontStyle: Constants.normal,
        color: Colors.black,
    },
    pinInstructions: {
        marginTop: 20,
        marginBottom: 30,
        marginHorizontal: 110,
        textAlign: Constants.center,

    },
    passcodeView: {
        flexDirection: Constants.row,
        justifyContent: Constants.center,
        alignItems: Constants.center,
        alignSelf: Constants.center,
    },
    passcodeIcon: {
        backgroundColor: Colors.keypadColor,
        marginHorizontal: 15,
        height: 16,
        width: 16,
        borderRadius: 30,
    },
    keypadContainer: {
        marginTop: 20,
        padding: 10,
        width: 350,
        alignItems: Constants.center,
        justifyContent: Constants.center,
        flexDirection: Constants.row,
        flexWrap: Constants.wrap,
    },
    fingerprintView: {
        width: 90,
        height: 90,
        justifyContent: Constants.center,
        alignItems: Constants.center,
        alignSelf: Constants.center,
        marginRight: 10,
    },
    hiddenKeypadIcon: {
        backgroundColor: Colors.white,
    },


});

export default styles
