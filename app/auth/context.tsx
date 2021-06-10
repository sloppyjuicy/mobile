/* eslint-disable prettier/prettier */
import React, { useContext, useEffect } from 'react';
import * as AuthSession from 'expo-auth-session';

import auth from '@config/auth';
import { IAuthContext, User } from '@utils/types';
import { Alert } from 'react-native';
import jwtDecode from 'jwt-decode';

const AuthContext = React.createContext(null);

export const useAuth = (): { login: () => void; user: User } => {
  const { setUser, user } = useContext(AuthContext) as unknown as IAuthContext;
  const redirectUri = AuthSession.makeRedirectUri({ useProxy: auth.useProxy });

  const [request, result, prompt] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: auth.auth0ClientId,
      responseType: 'id_token',
      scopes: ['openid', 'profile'],
      extraParams: {
        nonce: auth.nonce,
      },
    },
    { authorizationEndpoint: auth.authorizationEndpoint }
  );

  useEffect(() => {
    if (result?.type === 'success') {
      const decoded = jwtDecode<User>(result.params.id_token);
      setUser(decoded);
    } else {
      Alert.alert('Authentication failure');
    }
  }, [result, setUser]);

  const login = () => {
    prompt();
  };

  return { login, user };
};

export default AuthContext;
