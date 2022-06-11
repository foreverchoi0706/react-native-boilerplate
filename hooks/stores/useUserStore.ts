import create from 'zustand';

interface IUser {
  name: string;
}

export default create<IUser>(set => ({
  name: 'CHOI',
  increasePopulation: () => set(state => ({bears: state.name + '1'})),
  removeAllBears: () => set({name: ''}),
}));
