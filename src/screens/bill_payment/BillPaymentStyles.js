import { StyleSheet, Dimensions } from "react-native";
import { Colors, Constants } from "../../utils";

const { deviceHeight, deviceWidth } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: deviceHeight,
      width: deviceWidth,
      padding: 20,
      backgroundColor: "#FAFAFE",
    },
    searchBar: {
      backgroundColor: Colors.white,
      marginBottom: 10
    },
    headerText: {
        textAlign: Constants.center,
        fontSize: 22,
    },
    viewAll: {
      textAlign: Constants.right,
    },
    imageView: {
      marginVertical: 25,
      marginRight: 35,
      alignItems: Constants.center,
    },

});

export default styles;
