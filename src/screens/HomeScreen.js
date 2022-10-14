import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, useColorScheme, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from './style';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NewsListItem } from '../component/NewsListItem';
import moment from 'moment';
import UserStatusBar from '../component/StatusBar';

export default function HomeScreen({ navigation }) {
    const isDarkMode = useColorScheme() === 'dark';
    const [newsList, setNewsList] = useState([]);
    const [news, setNews] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getNewsData("India")
    }, [])

    const getNewsData = async (newsQuery) => {
        setLoading(true)
        let todayDate = moment().utc().format('YYYY-MM-DD')
        let url = `https://newsapi.org/v2/everything?q=${newsQuery ? newsQuery : "latest"}&from=${todayDate}&sortBy=popularity&pageSize=10&apiKey=2374df5ebe274bec9369cd1062c4433b`
        console.log("URL : ", url)
        await fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson.articles)
                setNewsList(responseJson.articles)
            })
            .catch((error) => {
                console.error(error);
            }).finally(() => {
                setLoading(false)
            })
    }

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const renderItem = (item) => (
        <NewsListItem item={item} />
    )

    return (
        <SafeAreaView style={backgroundStyle}>
            <UserStatusBar />
            {<>
                <View style={styles.searchBoxCon}>
                    <TextInput
                        placeholderTextColor='black'
                        style={styles.searchBox}
                        placeholder={'Search News Here...'}
                        value={news}
                        onChangeText={text => setNews(text)}
                        onSubmitEditing={() => getNewsData(news)}
                    />
                    <TouchableOpacity onPress={() => { getNewsData(news) }}>
                        <View style={styles.searchButtonCon}>
                            <Text style={styles.searchButtonText}> Search </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {
                    newsList?.length != 0 ? <FlatList
                        style={styles.flatListStyle}
                        keyExtractor={(item, index) => index}
                        data={newsList}
                        renderItem={({ item, index }) => renderItem(item, index)}
                        initialNumToRender={50}
                    >
                    </FlatList> : <View style={styles.emptyContainer}>
                        <Text style={styles.headingText}>{"Not result found of " + (news ? news : 'India')}</Text>
                    </View>
                }</>
            }
            {loading &&
                <View style={styles.loading}>
                    <ActivityIndicator
                        color='#2AC4BA'
                        size="large"
                    />
                </View>}
        </SafeAreaView>
    );
};

