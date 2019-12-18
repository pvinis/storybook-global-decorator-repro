import React, { ReactNode } from 'react';
import { View } from 'react-native';


const CenterView = props => (
    <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'stretch',
            backgroundColor: '#666',
        }}
    >
        {props.children}
    </View>
);

export const centered = (getStory: () => ReactNode) => <CenterView>{getStory()}</CenterView>;
