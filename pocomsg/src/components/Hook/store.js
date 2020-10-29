import React,{useReducer} from 'react';
// 封装一个组件：Provider
export const MyContext = React.createContext(null)

export const Provider = (props)=>{
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <MyContext.Provider value={{state,dispatch}}>
            {props.children}
        </MyContext.Provider>
    )
}

// export default Provider