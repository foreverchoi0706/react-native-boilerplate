import create from "zustand";

interface IUi{
    name : string
}

export default create<IUi>(set => ({
    name: "CHOI",
    increasePopulation: () => set(state => ({ bears: state.name+ "1" })),
    removeAllBears: () => set({ name: "" })
  }))

