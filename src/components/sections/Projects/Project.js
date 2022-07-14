import React from 'react'
import Card from './Card.tsx'
import PButton from './PButton';
import './styles/Project.css'
import { useMediaQuery } from 'react-responsive'




const Project = ({ card_direction, name, description, url, image }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    if (isMobile) {
        card_direction = "right";
    }


    return (
        <>{(card_direction === 'right') ? (
            <>
                <div className="p_container">
                    <div className='p_content'  data-aos="fade-right">
                        <div className='pt_box'>
                            {name}
                        </div>
                        <div className='pdsc_box' data-aos="fade-up">
                            {description}
                            <div className={isMobile ? 'pbtn_box_mobile' : 'pbtn_box'} data-aos="fade-left">
                                <PButton url={url} />
                            </div>
                        </div>
                    </div>
                    <div className="card_box" data-aos="zoom-in-up">
                        <Card image={image}/>
                    </div>
                </div>
            </>
        ) : (
            <>
                <div className="card_box" data-aos="zoom-in-up">
                    <Card image={image} />
                </div>
                <div className='p_content' data-aos="fade-down">
                    <div className='pt_box'>
                        {name}
                    </div>
                    <div className='pdsc_box'>
                        {description}
                        <div className={isMobile ? 'pbtn_box_mobile' : 'pbtn_box_right'} data-aos="fade-right">
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