export interface User {
  given_name?: string;
  nickname?: string;
  name?: string;
  picture?: string;
  locale?: string;
  updated_at?: string;
  iss?: string;
  sub?: string;
  aud?: string;
  iat?: number;
  exp?: number;
  nonce?: string;
}

export interface IAuthContext {
  user: User;
  setUser: (user: User) => void;
}
