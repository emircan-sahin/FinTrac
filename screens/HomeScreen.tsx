import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import MyText from '../components/MyText';
import MySafeAreaView from '../components/MySafeAreaView';
import Header from '../components/Header';

const HomeScreen: React.FC = () => {
    const handleAddPress = () => {
        console.log('Add button pressed');
    };

    return (
        <MySafeAreaView>
            <Header title="Home Screen" onAddPress={handleAddPress} />

            <ScrollView className='flex flex-col mt-6'>
                <View className='flex flex-row items-center'>
                    <Image
                        source={require('../assets/img/apps/apple.png')}
                        className='w-10 h-10'
                        resizeMode='contain'
                    />

                    <View className='flex flex-col gap-y-2 ml-3'>
                        <MyText className='font-medium'>Apple Store</MyText>
                        <MyText color='secondary'>$2.99 / month</MyText>
                    </View>

                    <View className='ml-auto'>
                        <MyText className='flex-1 text-right text-lg font-medium'>28 Days</MyText>

                        <View className='w-full block ml-auto h-2 bg-white/10 rounded-full'>
                            <View className='w-[40%] h-full bg-white rounded-full'></View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </MySafeAreaView >
    );
};

export default HomeScreen;