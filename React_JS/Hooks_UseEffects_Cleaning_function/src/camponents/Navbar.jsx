import React, { useEffect } from 'react'

function Navbar({ color }) {

    // case 1: Run on every render
    useEffect(() => {
        alert("Run on every render")
    })

    // case 2: Run only on first render
    useEffect(() => {
        alert("welcome to my page Run only on first render")
    }, [])

    // case 3: Run only when certain value is changed
    useEffect(() => {
        alert("Color was Changed Render when certain values are changed")
    }, [color])


    //This return function is a Example of Cleaning function run when camponent (here navbar) was deleted (unmounted) from the code
    useEffect(() => {
        alert("This is a example of cleaning function")
        
        return () => 
        {
            alert("Camponent was unmounted")
        }
    }, [])

    return (
        <div>
            <div>This is a Navbar of{color} color</div>
        </div>
    )
}

export default Navbar
