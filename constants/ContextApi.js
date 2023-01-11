import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

function ContextApi({ children }) {

    const [menuList, setMenuList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [favouriteList, setFavouriteList] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [selectTab, setSelectTab] = useState('All');
    const [isOnFavourite, setIsOnFavourite] = useState(false);



    return (
        <Context.Provider
            value={{
                menuList, setMenuList,
                categories, setCategories,
                cartList, setCartList,
                favouriteList, setFavouriteList,
                cartTotal, setCartTotal,
                selectTab, setSelectTab,
                isOnFavourite, setIsOnFavourite,
            }}
        >
            {children}
        </Context.Provider>
    )
}
export const useCustomHook = () => (useContext(Context))
export default ContextApi;