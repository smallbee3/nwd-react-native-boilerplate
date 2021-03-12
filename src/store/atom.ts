import { atom } from 'recoil';

import { User } from '../schemas/types';

const userState = atom<User | null>({
  key: 'userState',
  default: null,
});

export { userState };
