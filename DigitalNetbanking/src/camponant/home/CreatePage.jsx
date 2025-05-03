import React from 'react'
import "./CreateAcc.css"
import { NavLink } from 'react-router-dom'
const CreatePage = () => {
    return (
        <>

            <div id="createAccountForm" className='Container my-1 h-[95vh] '>
                <h2>Create Account</h2>
                <form>
                    <input className='required' type="text" placeholder="Enter Full Name" required />
                    <input type="text" placeholder="ATM Number" required />
                    <input type="text" placeholder="PAN Number" required />
                    <input type="email" placeholder="Email" required />
                    <input type="text" placeholder="Account Number" required />
                    <input type="text" placeholder="IFSC Code" required />
                    <textarea placeholder="Address" required></textarea>
                    <input type="password" placeholder="Password" required />
                    <NavLink to="/Login">
                        <button type="submit" className='py-1 px-0 bg-indigo-400 hover:bg-indigo-500'>
                            Create Account
                        </button>
                    </NavLink>

                </form>
            </div>

        </>
    )
}

export default CreatePage
