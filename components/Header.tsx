import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import MyText from './MyText';
import Ionicons from '@expo/vector-icons/Ionicons';

interface HeaderProps {
    title: string;
    onAddPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onAddPress }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <MyText style={{ fontSize: 18, fontWeight: 'normal' }}>{title}</MyText>
            {onAddPress && (
                <TouchableOpacity onPress={onAddPress} style={{ backgroundColor: '#1E1E2D', padding: 10, borderRadius: 9999 }}>
                    <Ionicons name='add' size={24} color='#FFF' />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Header;