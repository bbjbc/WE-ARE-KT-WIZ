import { atom } from 'jotai';
import WaveSurfer from 'wavesurfer.js';

export const searchTermAtom = atom('');

export const audioAtom = atom<WaveSurfer | null>(null);
