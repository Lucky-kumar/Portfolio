import React from 'react'
import Card from './Card.tsx'
import PButton from './PButton';
import './styles/Project.css'
import { useMediaQuery } from 'react-responsive'




const Project = ({ card_direction, name, description, url }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    if (isMobile) {
        card_direction = "right";
    }


    return (
        <>{(card_direction === 'right') ? (
            <>
                <div className="p_container">
                    <div className='p_content'>
                        <div className='pt_box'>
                            {name}
                        </div>
                        <div className='pdsc_box'>
                            {description}
                            <div className={isMobile ? 'pbtn_box_mobile' : 'pbtn_box'}>
                                <PButton url={url} />
                            </div>
                        </div>
                    </div>
                    <div className="card_box">
                        <Card />
                    </div>
                </div>
            </>
        ) : (
            <>
                <div className="card_box">
                    <Card />
                </div>
                <div className='p_content'>
                    <div className='pt_box'>
                        {name}
                    </div>
                    <div className='pdsc_box'>
                        {description}
                        <div className={isMobile ? 'pbtn_box_mobile' : 'pbtn_box_right'}>
                                <PButton url={url} />
                            </div>
                    </div>
                </div>
            </>
        )
        }
        </>
    )
}

export default Project