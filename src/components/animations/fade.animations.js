import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

export const FadeIn = ({ duration= 1500, children }) => {

    const fadeAnim = useRef(new Animated.Value(0)).current;


    useEffect(()=>{
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: duration,
            useNativeDriver: true
        }).start();
    },[fadeAnim, duration]);

    return(
        <Animated.View // Animated View
            style={{
                    // Bind opacity to animated value
                    opacity: fadeAnim
                }}
        >
            {children}
        </Animated.View>
    );
}