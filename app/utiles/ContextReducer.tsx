import { useReducer,createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ()=>{
    // const [state,dispatch] = useReducer(reducer,[]);
    const [state, dispatch] = useReducer(reducer,[])
}