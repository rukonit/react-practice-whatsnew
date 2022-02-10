import { Fragment, useReducer } from "react"
import { useState } from "react";

const inputReducer = (state, action) => {
    if(action.type === 'USER_INPUT') {
        return  {
            val: action.payload
        }
    }
   
    return {
        val: 'Hello For Use Reducer'
    }
}

const SimpleComponent2 = () => {


    const [inputState, dispatchState] = useReducer(inputReducer, {val: 'Hello For Use Reducer'})


    const handleInput = (event) => {
       dispatchState({type: 'USER_INPUT', payload: event.target.value})
    }

    return (<Fragment>
        <h1>{inputState.val}</h1>
        <input type="text" name="type" onChange={handleInput} />
        </Fragment>
    )
}

export default SimpleComponent2