import { types } from "../types/types"

export const setErrorUI = (name)=>
({
    type:types.uiSetError,
    payload:name
})

export const removeError =()=>
({
    type:types.uiRemoveError
})