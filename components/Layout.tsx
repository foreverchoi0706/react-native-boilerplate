import React, {memo, PropsWithChildren, VFC} from 'react';
import {SafeAreaView, StyleProp, ViewStyle} from 'react-native';

interface IProps {
  theme?: string;
  scroll?: boolean;
}

const style: StyleProp<ViewStyle> = {
  backgroundColor: '#ffffff',
  minHeight: '100%',
};

const Layout: VFC<PropsWithChildren<IProps>> = ({children}) => {
  return <SafeAreaView style={style}>{children}</SafeAreaView>;
};

export default memo(Layout);
