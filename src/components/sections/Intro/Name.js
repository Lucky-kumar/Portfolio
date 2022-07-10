import React from 'react'
import './styles/Name.css'

const Name = ({name}) => {
    return (
        <svg   className={name==="Lucky" ?'mname_svg' :"name_svg" } width="100%" height="100%">
            <text  className={name==="Lucky" ?'mname_text' :"name_text" } x="50%" y="60%" text-anchor="middle"  >
                {name}
            </text>
        </svg>
    )
}

export default Name