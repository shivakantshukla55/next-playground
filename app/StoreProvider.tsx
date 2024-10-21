'use client'
import { useRef } from "react"
import { Provider } from "react-redux"
import { makeStore, AppStore } from "../lib/store"
// import {initializeCount} from '../lib/counter/counterSlice'

export default function StoreProvider({
    // count,
    children,
}:{
    // count: number,
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>();
    if(!storeRef.current){
        // Create the store instance the firt time this renders
        storeRef.current = makeStore();
        // storeRef.current.dispatch(initializeCount(count))
    }

    return <Provider store={storeRef.current}>{children}</Provider>

}