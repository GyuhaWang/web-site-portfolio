import { atom, selector } from 'recoil';

export const componentRefState = atom<Record<string, HTMLElement | null>>({
  key: 'componentRefState',
  default: {},
});