import React, {memo, PropsWithChildren, VFC} from 'react';
import {ScrollView, StyleProp, View, ViewStyle} from 'react-native';

interface IProps {
  theme?: string;
  scroll?: boolean;
}

const style: StyleProp<ViewStyle> = {
  backgroundColor: '#ffffff',
  height: '100%',
};
const Layout: VFC<PropsWithChildren<IProps>> = ({children, scroll = true}) => {
  if (scroll) {
    return <ScrollView style={style}>{children}</ScrollView>;
  }
  return <View style={style}>{children}</View>;
};

export default memo(Layout);
