import { createContext, useReducer } from "react";
import { reducer } from "./reduser";

// eslint-disable-next-line
export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'});
    }

    value.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
    }

    value.handleBasketShow = () => {
        dispatch({type: 'BASKET_SHOW'});
    };

    value.addCard = (item) => {
        dispatch({type: 'ADD_CART', payload: item});
    }

    value.removeCart = (item) => {
        dispatch({type: 'REMOVE_CART', payload: item});
    }

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )

}