import React from 'react'
import $ from "jquery";
import './styles/ProjectsBg.css'
import Card from './Card.tsx'
import PTitle from './PTitle';
import PButton from './PButton';


$(window).scroll(function () {

    // selectors
    var $window = $(window),
        $body = $('.p_body'),
        $panel = $('.panel');

    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);

    $panel.each(function () {
        var $this = $(this);

        // if position is within range of this panel.
        // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
        // Remember we set the scroll to 33% earlier in scroll var.
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

            // Remove all classes on body with color-
            $body.removeClass(function (index, css) {
                return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
            });

            // Add class of currently active div
            $body.addClass('color-' + $(this).data('color'));
        }
    });

}).scroll();

const ProjectsBg = () => {
    return (
        <div className="p_body">
            <div className="panel" data-color="white">
                <div className='p_content'>
                    <div className='pt_box'>
                        <PTitle />
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
            </div>
            <div className="panel" data-color="violet">
                <div className="card_box">
                    <Card />
                </div>
                <div className='p_content'>
                    <div className='pt_box'>
                        <PTitle />
                    </div>
                    <div className='pdsc_box'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quia error repellendus unde? Quasi reprehenderit tenetur tempora eum qui labore iure. Necessitatibus doloribus, id minus quis exercitationem qui fugit, debitis ducimus animi assumenda voluptates similique repudiandae vero architecto quod hic? Praesentium, aut! Est temporibus quasi deserunt veniam exercitationem nostrum accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto quos magni non quam repudiandae ab quibusdam molestiae tempora ipsam, quia sit numquam dolorum eius quaerat, autem minima eveniet! Ut illo beatae et sit, reiciendis accusantium quas quibusdam in molestias quaerat corrupti atque id nihil aperiam repudiandae magni recusandae dicta.
                    </div>
                </div>
                <div className="pbtn_box_right">
                    <PButton />
                </div>

            </div>
            <div className="panel" data-color="blue">
                <h2>Blue panel</h2>
            </div>
            <div className="panel" data-color="green">
                <h2>Green panel</h2>
            </div>
            <div className="panel" data-color="orange">
                <h2>Orange panel</h2>
            </div>
        </div>
    )
}

export default ProjectsBg