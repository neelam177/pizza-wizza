"use client";
import { useReducer, createContext, useMemo, ReactNode } from "react";

interface CartContextType {
  state: any[];
  dispatch: React.Dispatch<any>;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const reducer = (state: any[], action: any) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          tempId: action.tempId,
          name: action.name,
          price: action.price,
          qty: action.qty,
          size: action.priceOption,
          img: action.img,
        },
      ];
    case "UPDATE":
      let arr = [...state];
      arr.find((food, index) => {
        if (food.tempId === action.tempId) {
          arr[index] = {
            ...food,
            qty: parseInt(action.qty) + parseInt(food.qty),
            price: action.price + food.price,
          };
        }
      });
    default:
      return state;
  }
};
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, []);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
