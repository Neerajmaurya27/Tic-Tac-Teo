import React from "react"
import "../App.css"
import { FaPen,FaRegCircle,FaTimes } from 'react-icons/fa';
const Icon = ({name}) => {
    switch(name){
        case "circle":
            return <FaRegCircle/>
        case "cross":
            return <FaTimes/>
        default :
            return <FaPen/>
        }
    }
export default Icon