import React from 'react'
import './styles/SkillsH.css'

const SkillsH = () => {
    return (
        <div className='sh_body'>
            <svg viewBox="0 0 600 300">
                <symbol id="s-text">
                    <text text-anchor="middle" x="50%" y="50%" dy=".35em">Skills Set</text>
                </symbol>
                <use className="sh_text" href="#s-text"></use>
                <use className="sh_text" href="#s-text"></use>
                <use className="sh_text" href="#s-text"></use>
                <use className="sh_text" href="#s-text"></use>
                <use className="sh_text" href="#s-text"></use>
            </svg>
        </div>
    )
}

export default SkillsH