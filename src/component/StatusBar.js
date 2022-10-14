import React from 'react';
import { useColorScheme,StatusBar } from 'react-native';

export default function UserStatusBar() {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? 'black' : 'white',
    };

    return (
        <StatusBar
            translucent={false}
            animated={true}
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
            hidden={false}
        />
    )
}