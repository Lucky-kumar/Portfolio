import React from 'react'
import Card from './Card.tsx'
// import PTitle from './PTitle';
import PButton from './PButton';
import './styles/Project.css'

const Project = ({ card_direction }) => {
    return (
        <>{(card_direction === 'right') ? (
            <>
                <div className='p_content'>
                    <div className='pt_box'>
                        Cryptoverse
                        {/* <PTitle /> */}
                    </div>
                    <div className='pdsc_box'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quia error repellendus unde? Quasi reprehenderit tenetur tempora eum qui labore iure. Necessitatibus doloribus, id minus quis exercitationem qui fugit, debitis ducimus animi assumenda voluptates similique repudiandae vero architecto quod hic? Praesentium, aut! Est temporibus quasi deserunt veniam exercitationem nostrum accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto quos magni non quam repudiandae ab quibusdam molestiae tempora ipsam, quia sit numquam dolorum eius quaerat, autem minima eveniet! Ut illo beatae et sit, reiciendis accusantium quas quibusdam in molestias quaerat corrupti atque id nihil aperiam repudiandae magni recusandae dicta.
                    </div>
                </div>
                <div className="pbtn_box">
                    <PButton />
                </div>
                <div className="card_box">
                    <Card />
                </div>
            </>
        ) : (
            <>
                <div className="card_box">
                    <Card />
                </div>
                <div className='p_content'>
                    <div className='pt_box'>
                        Cryptoverse
                        {/* <PTitle /> */}
                    </div>
                    <div className='pdsc_box'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quia error repellendus unde? Quasi reprehenderit tenetur tempora eum qui labore iure. Necessitatibus doloribus, id minus quis exercitationem qui fugit, debitis ducimus animi assumenda voluptates similique repudiandae vero architecto quod hic? Praesentium, aut! Est temporibus quasi deserunt veniam exercitationem nostrum accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto quos magni non quam repudiandae ab quibusdam molestiae tempora ipsam, quia sit numquam dolorum eius quaerat, autem minima eveniet! Ut illo beatae et sit, reiciendis accusantium quas quibusdam in molestias quaerat corrupti atque id nihil aperiam repudiandae magni recusandae dicta.
                    </div>
                </div>
                <div className="pbtn_box_right">
                    <PButton />
                </div>
            </>
        )
        }
        </>
    )
}

export default Project