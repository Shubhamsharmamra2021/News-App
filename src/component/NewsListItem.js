import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from '../screens/style';
import moment from "moment";
import { useNavigation } from '@react-navigation/native';

export const NewsListItem = ({ item }) => {
    const [imageLoad, setImageLoad] = useState(true)
    function onLoad() {
        setImageLoad(false)
    }
    const navigation = useNavigation()
    return (
        <View style={styles.newContainer} >
            <View style={styles.newsConFlex}>
                <View style={{ flex: 1 }}>
                    <Image
                        onLoadEnd={onLoad}
                        style={styles.newsImage}
                        source={{ uri: item?.urlToImage }}
                    />
                    <ActivityIndicator
                        color='#2AC4BA'
                        size="large"
                        style={styles.activityIndicator}
                        animating={imageLoad}
                    />
                </View>
                <View style={styles.newSubcon}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('News-Detail', { item: item })
                    }}>
                        <Text style={styles.newsHeading}>{item?.title}</Text>
                    </TouchableOpacity>
                    <Text style={styles.newsDate}>{"Published On : " + moment(item.publishedAt).utc().format('DD/MM/YYYY')}</Text>
                    <Text style={{}}>{item?.description.length > 150 ? item?.description.substring(0, 150) + "..." : item?.description}</Text>

                </View>
            </View>
        </View>

    )
}