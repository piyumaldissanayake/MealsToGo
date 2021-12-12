import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export const RestaurantInfoCard = ({ restaurant = {} }) => {

    const {
        name = 'Some Restaurant',
        icon,
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = '100 Some random street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = false
    } = restaurant;

    return(
        <Card elevation={5} style={styles.Card} >
            <Card.Cover style={styles.cover} key={name} source={{ uri: photos[0] }} />
            <Text style={styles.title} >{name}</Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: { backgroundColor: "white" },
    cover: { padding: 20, backgroundColor: "white" },
    title: { padding: 16 },
});