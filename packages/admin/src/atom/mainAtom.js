import { atom } from 'jotai';

const countAtom = atom(0);


const getSetCountAtom = atom(
    (get) => get(countAtom),
    (get, set, newPrice) => {
      console.log(newPrice)
      set(countAtom, newPrice)
      // you can set as many atoms as you want at the same time
    }
)

export default getSetCountAtom;