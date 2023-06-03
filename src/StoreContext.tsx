import React from 'react';
import {StoreType} from "./redux/store";

let StoreContext = React.createContext({} as StoreType);

export type ProviderType = {
    store: StoreType,
    children: any
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;