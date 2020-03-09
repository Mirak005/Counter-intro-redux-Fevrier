import {INCREMENT , DECREMENT ,RESET } from "../const/actionTypes"


export const inc = (payload)=> {
    return { type:INCREMENT  , payload  }
}

export const dec = (payload)=> {
    return { type:DECREMENT , payload  }
}

export const reset = ()=> ({
    type:RESET
})