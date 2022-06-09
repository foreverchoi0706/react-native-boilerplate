import React, {PropsWithChildren, VFC} from 'react';
import {ScrollView} from 'react-native';

interface IProps {
  theme?: string;
}

const Layout: VFC<PropsWithChildren<IProps>> = ({children}) => {
  return <ScrollView>{children}</ScrollView>;
};

export default Layout;
