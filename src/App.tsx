import React from 'react';
import { RecoilRoot } from 'recoil';

import RootNavigator from './components/navigations/RootStackNavigator';
import RootProvider from './providers';
import { initFbt } from './utils/fbt';

initFbt();

function App(): React.ReactElement {
  return <RootNavigator />;
}

function ProviderWrapper(): React.ReactElement {
  return (
    <RootProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </RootProvider>
  );
}

export default ProviderWrapper;
