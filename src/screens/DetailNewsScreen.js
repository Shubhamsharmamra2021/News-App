import React from 'react';
import { View, ActivityIndicator, useColorScheme, SafeAreaView, StatusBar } from 'react-native';
import { styles } from './style';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import WebView from 'react-native-webview';
import UserStatusBar from '../component/StatusBar';

export default function DetailNewsScreen(props) {
    const isDarkMode = useColorScheme() === 'dark';
    const { item } = props.route.params
    function IndicatorLoadingView() {
        return (
            <ActivityIndicator
                color='#2AC4BA'
                size="large"
                style={styles.indicatorStyle}
            />
        );
    }
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : 'white',
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <UserStatusBar />
            <View style={styles.newDetailContainer} >
                <WebView
                    source={{ uri: item.url }}
                    renderLoading={IndicatorLoadingView}
                    javaScriptEnabledAndroid={true}
                    startInLoadingState={true}
                />
            </View>
        </SafeAreaView>
    )
};

