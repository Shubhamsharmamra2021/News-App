import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchBoxCon: {
        flexDirection: 'row',
        marginHorizontal: width * 0.05,
        marginVertical: height * 0.03
    },
    searchButtonCon: {
        backgroundColor: '#2AC4BA',
        height: 40,
        width: 70,
        justifyContent: 'center',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    searchButtonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    searchBox: {
        paddingVertical: 2,
        paddingHorizontal: 15,
        width: width * 0.7,
        color: 'black',
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    newContainer: {
        borderRadius: 10,
        marginVertical: height * 0.015,
        //paddingHorizontal: width * 0.02,
        marginHorizontal: width * 0.05,
        width: width * 0.90,
        height: height * 0.50,
        backgroundColor: '#fff'
    },
    newDetailContainer: {
        borderRadius: 10,
        marginVertical: height * 0.015,
        //paddingHorizontal: width * 0.02,
        marginHorizontal: width * 0.05,
        width: width * 0.90,
        height: height * 0.87,
        backgroundColor: '#fff'
    },
    newsConFlex: {
        flexDirection: 'column',
        flex: 1
    },

    newsImage: {
        width: width * 0.90,
        height: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: height * 0.01

    },
    newSubcon: {
        marginLeft: 10,
        paddingTop: height * 0.02,
        width: width * 0.85,
        flex: 1
    },
    newsHeading: {
        fontSize: 20,
        fontWeight: '700'
    },
    newsDate: {
        fontSize: 10
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.8,
        backgroundColor: 'white'
    },
    headingText: {
        color: '#0A034C',
        fontSize: height * 0.022,
        lineHeight: height * 0.03,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    activityIndicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    flatListStyle: {
        height: height * 0.77
    },
    indicatorStyle: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
})