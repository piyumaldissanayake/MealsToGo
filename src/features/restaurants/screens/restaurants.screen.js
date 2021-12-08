import React, {useState} from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';


import {RestaurantInfo} from '../components/restaurant-info.component';

export const RestaurantsScreen   = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = (query) => {
        setSearchQuery(query)
    };

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.search} >
                <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                />
            </View>
                <View style={styles.list} >
                    <RestaurantInfo />
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight // only for andriod. Does not work in ios
    },
    search: {
      padding: '5%',
    },
    list: {
      flex: 1,
      padding: '5%',
      backgroundColor: 'blue',
    },
  });
  