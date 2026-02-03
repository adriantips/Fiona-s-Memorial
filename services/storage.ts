import { Tribute, Poem } from '../types';

const TRIBUTES_KEY = 'fiona_memorial_tributes';
const POEMS_KEY = 'fiona_memorial_poems';

export const getTributes = (): Tribute[] => {
  try {
    const stored = localStorage.getItem(TRIBUTES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Failed to load tributes", e);
    return [];
  }
};

export const saveTribute = (tribute: Tribute): Tribute[] => {
  const current = getTributes();
  const updated = [tribute, ...current];
  localStorage.setItem(TRIBUTES_KEY, JSON.stringify(updated));
  return updated;
};

export const getPoems = (): Poem[] => {
  try {
    const stored = localStorage.getItem(POEMS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Failed to load poems", e);
    return [];
  }
};

export const savePoem = (poem: Poem): Poem[] => {
  const current = getPoems();
  const updated = [poem, ...current];
  localStorage.setItem(POEMS_KEY, JSON.stringify(updated));
  return updated;
};
