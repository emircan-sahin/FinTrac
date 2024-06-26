import React from 'react';
import { View, SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';

interface MySafeAreaViewProps {
    children: React.ReactNode;
}

const MySafeAreaView: React.FC<MySafeAreaViewProps> = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View className='flex-1 p-6'>
                {children}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161622',
        paddingHorizontal: 24,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});

export default MySafeAreaView;