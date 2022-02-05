import { useEffect, Fragment } from "react"
import { useState } from "react";


const SimpleComponent = () => {

    const [aText, setAText] = useState("Hello")


    useEffect(()=> {
       
       const aTimer = setTimeout(() =>{
            console.log("use effect running");
        }, 5000)

        return () => {
            clearTimeout(aTimer)
            console.log("Cleaning");
        }
    }, [aText])

    const handleInput = (event) => {
        setAText(event.target.value)
    }

    return (<Fragment>
        <h1>{aText}</h1>
        <input type="text" name="type" onChange={handleInput} />
        </Fragment>
    )
}

export default SimpleComponent