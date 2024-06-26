// components/MyText.tsx
import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

const rubikFonts = {
    regular: 'Rubik-Regular',
    light: 'Rubik-Light',
    medium: 'Rubik-Medium',
    bold: 'Rubik-Bold',
    extrabold: 'Rubik-ExtraBold',
    black: 'Rubik-Black',
};

interface MyTextProps extends TextProps {
    variant?: keyof typeof rubikFonts;
    style?: any;
    color?: 'primary' | 'secondary' | 'gray';
}

const MyText: React.FC<MyTextProps> = ({ variant = 'regular', color = 'primary', style, children, ...rest }) => {
    const textStyle = [
        {
            fontFamily: rubikFonts[variant],
            color: color === 'primary' ? '#FFF' : color === 'secondary' ? '#7E848D' : '#A2A2A7',
        },
        style,
    ];

    return (
        <Text style={textStyle} {...rest}>
            {children}
        </Text>
    );
};

export default MyText;