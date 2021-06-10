/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';

import WelcomeScreen from '@screens/WelcomeScreen';
import AuthContext from '@auth/context';
import { User } from '@utils/types';

export default function App(): React.ReactElement {
  const [user, setUser] = useState<User | undefined>(undefined);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <WelcomeScreen />
    </AuthContext.Provider>
  );
}
