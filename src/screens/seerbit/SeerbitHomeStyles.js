import { StyleSheet, Dimensions } from "react-native";
import { Colors, Constants } from "../../utils";

const { deviceHeight, deviceWodth } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: deviceHeight,
      width: deviceWodth,
    },
    topDashboard: {
        backgroundColor: Colors.lightGreen,
    },
    headerView: {
        flexDirection: Constants.row,
        justifyContent: Constants.spaceBetween,
        padding: 20
    },
    walletAmountView: {
        flexDirection: Constants.row,
        alignItems: Constants.center
    },
    amount: {
        fontSize: 20,
        marginRight: 8,
    },
    navigationView: {
        paddingHorizontal: 20,
    },
    navigationItem: {
        alignSelf: Constants.center,
    },
    iconView: {
        backgroundColor: Colors.darkGreen,
        alignSelf: Constants.center,
        borderRadius: 40,
        padding: 10,
        justifyContent: Constants.center,
        alignItems: Constants.center,
    },
    horizontalNavigationView: {
        flexDirection: Constants.row,
        justifyContent: Constants.spaceBetween,
        marginHorizontal: 20,
    },
    accountNumberView: {
        backgroundColor: Colors.darkGreen,
        marginTop: 20,
        borderRadius: 20,
        padding: 10,
        marginHorizontal: 60,
        marginBottom: 10,
        flexDirection: Constants.row,
        alignItems: Constants.center,
        justifyContent: Constants.center,
    },
    accountText: {
        color: Colors.redText,
    },
    accountNumber: {
        color: Colors.greenText,
        marginRight: 5
    },
    bottomDashboard: {
        padding: 20,
        backgroundColor: Colors.white,
    },
    heading: {
        marginTop: 20,
        marginBottom: 10
    },
    transactionView: {
        flexDirection: Constants.row,
        height: 70,
        flex: 1,
        paddingVertical: 5,
        backgroundColor: Colors.flatListBackground,
        justifyContent: Constants.center,
        alignItems: Constants.center,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
    },
    transactionLogo: {
        borderRadius: 40
    },
    transactionDetails: {
        flex: .7,
        marginLeft: 10,
    },
    transactionAmountView: {
        flex: .3,
        alignItems: Constants.flexEnd,
    },
    showMoreContainer: {
        flexDirection: Constants.row,
        marginVertical: 10,
        alignItems: Constants.center,
        justifyContent: Constants.center,
    },
    seeMore: {
        marginRight: 7,
        color: Colors.greenText
    },
    billPaymentHeading: {
        flexDirection: Constants.row,
        alignItems: Constants.center,
        marginBottom: 20,
    },
    billPaymentTabView: {
        flexDirection: Constants.row,
        position: Constants.absolute,
        alignItems: Constants.center,
        justifyContent: Constants.spaceEvenly,
        width: 150,
        top: 10,
        marginHorizontal: 100,
        borderRadius: 30,
        padding: 5,
        backgroundColor: Colors.white,
        elevation: 5,
        
    },
    imageView: {
        backgroundColor: Colors.white,
        marginVertical: 30,
        marginRight: 35,
        alignItems: Constants.center,
    },
    sendMoneyIcon: {
        alignSelf: Constants.center,
        justifyContent: Constants.center,
        alignSelf: Constants.center,
        alignItems: Constants.center,
    }
});

export default styles;
