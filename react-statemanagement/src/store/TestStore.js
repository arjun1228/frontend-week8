import {create} from  'zustand'

//create store
export const useTest = create((set) => ({
    x:10,
    y:5, 
    user: {
        name:"arjun",
        age:21
    },
    //functions to modify state
    incrementX: () => set((state) => ({x: state.x + 1})),
    decrementX: () => set((state) => ({x: state.x - 1})),
    incrementXByValue: (v) => set((state) => ({x: state.x + v})),
    incrementY: () => set((state) => ({y: state.y + 1})),
    updateUser : (newName) => set((state) => ({user: {...state.user,age:30,name:newName}}))
}))