import React from 'react'
import { Icons } from './../../../utils/Icons';
import SkillsH from './SkillsH';
import './styles/Skills.css'

const Skills = () => {

  const IconItem = (props) =>
    <div className="skill_item" draggable={true}>
      {React.createElement(props.icon, props.options)}
      <div className="skill_description">
        <h4>{props.name}</h4>
        <p>{props.description}</p>
      </div>
    </div>

  return (
    <div className="skills">
      <div className="sh_box">
      <SkillsH/>
      </div>
      <div>

      </div>
      <div className="skill_icons_section">
        {Icons.map((language, index) =>
          language.icon &&
          <IconItem
            key={index}
            icon={language.icon}
            options={language.options}
            name={language.name}
            description={language.description}
          ></IconItem>)
        }
      </div>
    </div>
  )
}

export default Skills