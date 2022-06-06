import React from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';


export class MenuItem extends React.PureComponent {
    render() {
        const {iconXml, color,focused} = this.props;
        return (
            <View >
                <SvgXml
                    xml={iconXml}
                    width={22}
                    height={22}
                    color={color}
                />
            </View>
        );
    }
}
