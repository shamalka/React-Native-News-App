import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Card, Layout, Text } from '@ui-kitten/components';

const SettingsScreen = () => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category='h1'>SETTINGS</Text>
      <Card><Text>New Card</Text></Card>
    </Layout>
  );
}

export default SettingsScreen;