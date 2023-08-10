import { atom } from 'jotai';
import { Guest, Steps } from "../helpers/models.ts";

export const guestNameAtom = atom('');
export const currentStepAtom = atom(Steps.WELCOME);
export const guestTypeAtom = atom<string>(''); // 'adult', 'child', 'baby'
export const guestListAtom = atom<Guest[]>([]);
