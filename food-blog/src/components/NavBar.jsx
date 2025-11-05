import React from "react";
import { useState } from "react";
import Modal from "./Modal";
export default function NavBar(props) {

    const [isOpen,setIsOpen]=useState(false)

    const checkLogin=()=>{
        setIsOpen(true)
    }
    

    return (
        <>

        <header>
            <h2>Food Blog</h2>
            <ul>
                 <li>
                    Home
                </li>
                <li>
                    My Recipe
                </li>
                 <li>
                    Favourites
                </li>
                 <li>
                    My Recipe
                </li>
                 <li onClick={checkLogin}>
                   Login
                </li>
            </ul>
            
        </header>
        {isOpen && <Modal onClose={()=>setIsOpen(false)}/>}
        </>
    );
}
